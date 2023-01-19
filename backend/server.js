require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const session = require('express-session');
const store = require('session-file-store');
const { Restoraunt } = require('./db/models');
const authRouter = require('./routes/authRouter');
const indexRouter = require('./routes/indexRouter');

const app = express();
const PORT = 3001 || process.env.PORT;
const FileStore = store(session);

const sessionConfig = {
  name: 'user_sid',
  secret: process.env.SESSION_SECRET ?? 'test',
  resave: true,
  store: new FileStore(),
  // если true, то в хранилище будут попадать пустые сессии
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 12,
    httpOnly: true,
  },
};

app.use(
  cors({
    credentials: true,
    origin: true,
  }),
);
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: 'true' }));
app.use(express.json());
app.use(session(sessionConfig));

// app.get('/', async (req, res) => {
//   const allPosts = await Restoraunt.findAll();
//   res.json(allPosts);
// });

// app.post('/posts', async (req, res) => {
//   const { message } = req.body;
//   const newPost = await Post.create({ message });
//   res.json(newPost);
// });

// app.delete('/posts/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
//     await Post.destroy({ where: { id } });
//     res.sendStatus(200);
//   } catch (e) {
//     console.log(e);
//   }
// });

// app.use('/', indexRouter);
app.use('/', authRouter);

app.listen(PORT, () => {
  console.log(`Server is started on port ${PORT}`);
});
