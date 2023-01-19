const express = require('express');
const bcrypt = require('bcrypt');
const { compare } = require('bcrypt');
const { User } = require('../db/models');

const router = express.Router();

router.post('/signup', async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) return res.status(400).json({ message: 'Необходимо заполнить все поля формы регистрации' });
  const hash = await bcrypt.hash(password, 7);
  try {
    const [user, isCreated] = await User.findOrCreate({ where: { email }, defaults: { name, email, password: hash } });
    if (!isCreated) return res.status(401).json({ message: 'Пользователь уже зарегистрирован!' });
    req.session.user = { id: user.id, name: user.name, email: user.email };
    const result = { id: user.id, name: user.name, email: user.email };
    res.json(result);
  } catch (err) {
    res.status(418).json({ message: 'Вы чайник' });
  }
});

router.post('/signin', async (req, res) => {
  // достаем email и password
  const { email, password } = req.body;
  // проверка на заполнение всех полей
  if (!email || !password) return res.status(400).json({ message: 'Необходимо заполнить все поля' });
  try {
    // ищем user в БД по email
    const userInDB = await User.findOne({ where: { email } });
    // если в ДБ нет такого юзера
    if (!userInDB) return res.status(400).json({ message: 'Не верно указаны email или пароль' });
    // сверка пароля
    const validPassword = await compare(password, userInDB.password);
    // вернет месседж, если пароль не совпадет
    if (!validPassword) return res.status(400).json({ message: 'Неверно введён логин или пароль пользователя' });
    // если всё ОК -> созд сессию и отправляем на фронт
    req.session.user = { id: userInDB.id, name: userInDB.name, email: userInDB.email };
    const result = { id: userInDB.id, name: userInDB.name, email: userInDB.email };
    res.json(result);
  } catch (err) {
    res.status(400).json({ message: 'Неверно введён логин или пароль пользователя' });
  }
});

router.post('/auth-check', (req, res) => {
  if (req.session.user) {
    return res.json(req.session.user);
  }
  return res.sendStatus(401);
});

router.patch('/profile-edit', async (req, res) => {
  try {
    const { name, email, currentUser } = req.body;
    const user = await User.update({
      name,
      email,
    }, {
      where: {
        email: currentUser,
      },
    });
    const result = await User.findOne({
      where: {
        email,
      },
    });
    req.session.user = { id: result.id, name: result.name, email: result.email };
    res.json(result);
  } catch (error) {
    res.send(error);
  }
});

router.get('/signout', (req, res) => {
  // удалить куку
  res.clearCookie('user_sid');
  // Завершить сессию
  req.session.destroy();
  res.sendStatus(200);
});

module.exports = router;
