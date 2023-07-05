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
