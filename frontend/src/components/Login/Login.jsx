import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import Notification from '../Notification/Notification';
import { useFormWithValidation } from '../../hooks/useFormValidation';
import { useDispatch, useSelector } from 'react-redux';
import { authUserAction } from '../../services/actions/actions';
import { useEffect } from 'react';

const Login = ({ responseStatus, modal}) => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector(state => state.auth);
  const navigate = useNavigate();
  const validateForm = useFormWithValidation();

  const handleChangeEmail = (e) => {
    validateForm.handleChange(e);
  };
  const handleChangePassword = (e) => {
    validateForm.handleChange(e);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authUserAction(validateForm.values));
  };

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/')
    }
  }, [isLoggedIn])

  return (
    <section className="login">
        <div className="content login__content">
          <form action="#" name="login" className="login__form" onSubmit={handleSubmit}>
            <fieldset className="login__fieldset">
              <legend>
                <h2 className="login__title">Рады видеть!</h2>
              </legend>
              <p className="login__input-title">E-mail</p>
              <input
              type="email"
              className="login__input login__input_email"
              required
              name="email"
              placeholder="Введите email"
              autoComplete="username"
              onChange={handleChangeEmail}
              pattern="[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}"
              />
              <span className="login__error login__error_email">{validateForm.errors.email}</span>
              <p className="login__input-title">Пароль</p>
              <input
              type="password"
              className="login__input login__input_password"
              required
              name="password"
              minLength="3"
              placeholder="Введите пароль"
              autoComplete="current-password"
              onChange={handleChangePassword}
              />
              <span className="login__error login__error_password">{validateForm.errors.password}</span>
            </fieldset>
            <button type="submit" disabled={`${validateForm.isValid ? '' : 'disabled'}`} className={`login__btn ${validateForm.isValid ? 'login__btn_active' : ''}`}>Войти</button>
          </form>
          <span className="login__signup-text">Ещё не зарегистрированы?&nbsp;
            <Link to="/signup" className="login__signup-btn">Регистрация</Link>
          </span>
        </div>
        <Notification isActive={modal} responseStatus={responseStatus} />
    </section>
  )
}

export default Login;