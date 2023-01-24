import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userChangeAction } from '../../services/actions/actions';
import Notification from '../Notification/Notification';

function ProfileDemo() {
  const [values, setValues] = useState({
    name: '',
    email: ''
  });
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.auth);
  const [edit, setEdit] = useState(false);

  const handleChangeValues = (e) => {
    setValues((prev) => ({...prev, [e.target.name]: e.target.value}))
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(userChangeAction({...values, currentUser: user.email}));
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
              placeholder={user?.name}
              onChange={handleChangeValues}
              value={values.name}
              name="name"
              minLength="2"
              maxLength="30"
              required
              disabled={!edit ? 'disabled' : null}
              />
              {/* <span className="profile__error profile__error_name">{validateForm.errors.name}</span> */}
              <input
              type="email"
              className={`profile__input ${edit && 'profile__input_active'} profile__input_email`}
              placeholder={user?.email}
              autoComplete="username"
              value={values.email}
              onChange={handleChangeValues}
              name="email"
              pattern="[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}"
              disabled={!edit ? 'disabled' : null}
              required
              />
              {/* <span className="profile__error profile__error_email">{validateForm.errors.email}</span> */}
            </fieldset>
            {
              edit ? (
                <>
                <button type="submit" className={`profile__btn profile__btn_active`}>Сохранить</button>
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

export default ProfileDemo;