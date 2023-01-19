import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link, NavLink } from 'react-router-dom';
import { useFormWithValidation } from '../../hooks/useFormValidation';
import Notification from '../Notification/Notification';

function Profile() {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.auth);
  const validateForm = useFormWithValidation();
  const [edit, setEdit] = useState(false);

  const handleChangeName = (e) => {
    validateForm.handleChange(e);
  };
  const handleChangeEmail = (e) => {
    validateForm.handleChange(e);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // dispatch(authUserAction(validateForm.values));
    console.log(validateForm.values);
    setEdit(false);
  };

  const handleEditActive = () => {
    setEdit(true);
  }
  const handleEditDisabled = () => {
    setEdit(false);
  }
  return (
    <section className="register">
        <div className="content profile__content">
          <form name="register" className="profile__form" onSubmit={handleSubmit} >
            <fieldset className="profile__fieldset">
              <legend>
                <h2 className="profile__title">{`Твой профиль, ${user?.name}`}</h2>
              </legend>
              <input
              type="text"
              className={`profile__input ${edit && 'profile__input_active'} profile__input_name`}
              required
              placeholder={user?.name}
              onChange={handleChangeName}
              minLength="2"
              maxLength="30"
              name="name"
              disabled={!edit ? 'disabled' : null}
              />
              <span className="profile__error profile__error_name">{validateForm.errors.name}</span>
              <input
              type="email"
              className={`profile__input ${edit && 'profile__input_active'} profile__input_email`}
              required
              placeholder={user?.email}
              autoComplete="username"
              onChange={handleChangeEmail}
              name="email"
              pattern="[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}"
              disabled={!edit ? 'disabled' : null}
              />
              <span className="profile__error profile__error_email">{validateForm.errors.email}</span>
            </fieldset>
            {
              edit ? (
                <>
                <button type="submit" disabled={`${validateForm.isValid ? '' : 'disabled'}`} className={`profile__btn ${validateForm.isValid ? 'profile__btn_active' : ''}`}>Сохранить</button>
                <button type="button" onClick={handleEditDisabled} className={`profile__btn profile__btn_active`}>Отменить</button>
                </>
              ) : (
                <button type="button" onClick={handleEditActive} className={`profile__btn profile__btn_active`}>Редактировать</button>
              )
            }
          </form>
        </div>
        <Notification />
    </section>
  );
}

export default Profile;