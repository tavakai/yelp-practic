import React from 'react';
import { Link } from 'react-router-dom';
import Notification from '../Notification/Notification';
import useFormWithValidation from '../../hooks/useFormValidation';
import { regUserAction } from '../../services/actions/actions';
import { useDispatch } from 'react-redux';

const Register = ({modal, responseStatus}) => {
  const dispatch = useDispatch();
  const validateForm = useFormWithValidation();
  const handleChangeName = (e) => {
    validateForm.handleChange(e);
  };
  const handleChangeEmail = (e) => {
    validateForm.handleChange(e);
  };
  const handleChangePassword = (e) => {
    validateForm.handleChange(e);
  };
  const submit = (e) => {
    e.preventDefault();
    dispatch(regUserAction(validateForm.values));
  };

  return (
    <section className="register">
        <div className="content register__content">
          <form name="register" className="register__form" onSubmit={submit} >
            <fieldset className="register__fieldset">
              <legend>
                <h2 className="register__title">Добро пожаловать!</h2>
              </legend>
              <p className="register__input-title">Имя</p>
              <input
              type="text"
              className="register__input register__input_name"
              required
              placeholder="Введите имя"
              onChange={handleChangeName}
              minLength="2"
              maxLength="30"
              name="name"
              />
              <span className="register__error register__error_name">{validateForm.errors.name}</span>
              <p className="register__input-title">E-mail</p>
              <input
              type="email"
              className="register__input register__input_email"
              required
              placeholder="Введите email"
              autoComplete="username"
              onChange={handleChangeEmail}
              name="email"
              pattern="[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}"
              />
              <span className="register__error register__error_email">{validateForm.errors.email}</span>
              <p className="register__input-title">Пароль</p>
              <input
              type="password"
              className="register__input register__input_password"
              required placeholder="Введите пароль"
              autoComplete="current-password"
              minLength="3"
              name="password"
              onChange={handleChangePassword}
              />
              <span className="register__error register__error_password">{validateForm.errors.password}</span>
            </fieldset>
            <button type="submit" disabled={`${validateForm.isValid ? '' : 'disabled'}`} className={`register__btn ${validateForm.isValid ? 'register__btn_active' : ''}`}>Зарегистрироваться</button>
          </form>
          <span className="register__signin-text">Уже зарегистрированы?&nbsp;
            <Link to="/signin" className="register__signin-btn">Войти</Link>
          </span>
        </div>
        <Notification isActive={modal} responseStatus={responseStatus} />
    </section>
  )
}

export default Register;