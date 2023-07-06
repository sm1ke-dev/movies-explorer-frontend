class MainApi {
  constructor({ baseUrl, headers, credentials }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
    this._credentials = credentials;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(`Ошибка: ${res.status}`);
  }

  _request(url, options) {
    return fetch(url, options).then(this._checkResponse);
  }

  register(email, name, password) {
    return this._request(`${this._baseUrl}/signup`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        email,
        name,
        password,
      }),
    });
  }

  login(email, password) {
    return this._request(`${this._baseUrl}/signin`, {
      method: "POST",
      headers: this._headers,
      credentials: this._credentials,
      body: JSON.stringify({
        email,
        password,
      }),
    });
  }

  logout() {
    return this._request(`${this._baseUrl}/signout`, {
      method: "POST",
      credentials: this._credentials,
    });
  }

  getMyInfo() {
    return this._request(`${this._baseUrl}/users/me`, {
      credentials: this._credentials,
    });
  }

  updateProfile(email, name) {
    return this._request(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      credentials: this._credentials,
      body: JSON.stringify({
        email,
        name,
      }),
    });
  }

  getMovies() {
    return this._request(`${this._baseUrl}/movies`, {
      credentials: this._credentials,
    });
  }

  saveMovie(movieCard) {
    return this._request(`${this._baseUrl}/movies`, {
      method: "POST",
      headers: this._headers,
      credentials: this._credentials,
      body: JSON.stringify({
        country: movieCard.country,
        director: movieCard.director,
        duration: movieCard.duration,
        year: movieCard.year,
        description: movieCard.description,
        image: `https://api.nomoreparties.co${movieCard.image.url}`,
        trailerLink: movieCard.trailerLink,
        thumbnail: `https://api.nomoreparties.co${movieCard.image.formats.thumbnail.url}`,
        movieId: movieCard.id,
        nameRU: movieCard.nameRU,
        nameEN: movieCard.nameEN,
      }),
    });
  }

  deleteMovie(movieCard) {
    return this._request(`${this._baseUrl}/movies/${movieCard._id}`, {
      method: "DELETE",
      credentials: this._credentials,
    });
  }
}

export const mainApi = new MainApi({
  baseUrl: "http://localhost:3001",
  headers: {
    "Content-Type": "application/json",
  },
  credentials: "include",
});

// 'http://localhost:3001'
// "https://api.bitfilms.gud.nomoredomains.rocks"
