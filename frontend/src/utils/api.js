import axios from 'axios'

class Api {
  constructor({
    baseUrl,
    headers,
  }) {
    this.baseUrl = baseUrl;
    this.headers = headers;
  }

  // Авторизация пользователя
  authUser(user) {
    return axios.post(`${this.baseUrl}/signin`, user)
  }

  // Регистрация пользователя
  regUser(user) {
    return axios.post(`${this.baseUrl}/signup`, user)
  }

  // Выход из системы
  signOut() {
    return axios.get(`${this.baseUrl}/signout`)
  }

  // Регистрация пользователя
  authCheck() {
    return axios.post(`${this.baseUrl}/auth-check`)
  }

  // Редактировать профиль пользователя
  changeUser(user) {
    return axios.patch(`${this.baseUrl}/profile-edit`, user)
  }

  // Получить посты пользователя
  getUserPosts() {
    return fetch(`${this.baseUrl}/posts/me`, {
      method: 'GET',
      headers: this.headers,
    })
      .then((res) => this.getResponseData(res));
  }

  // Получить все карточки
  getEvents() {
    return fetch(`${this.baseUrl}/events`, {
      headers: this.headers,
    })
      .then((res) => this.getResponseData(res));
  }

  // Загрузка начальных данных
  getMovies() {
    return axios.get('https://api.nomoreparties.co/beatfilm-movies');
  }

  // Получить одно событие
  getEvent(eventId) {
    return fetch(`${this.baseUrl}/events/one/`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({ eventId }),
    })
      .then((res) => this.getResponseData(res));
  }

  // Удаление поста
  removeEvent(cardId) {
    return fetch(`${this.baseUrl}/events/${cardId}`, {
      method: 'DELETE',
      headers: this.headers,
    })
      .then((res) => this.getResponseData(res));
  }

  // Метод проверки ответа и преобразование в json
  getResponseData(response) {
    if (!response.ok) {
      return Promise.reject(`Ошибка: ${response.status}`);
    }
    return response.json();
  }
}

const api = new Api({
  baseUrl: 'http://localhost:3001',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;