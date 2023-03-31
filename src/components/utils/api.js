import { getCookie } from "./utils";

const baseUrl = 'https://norma.nomoreparties.space/api';

const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }

  return Promise.reject(`Ошибка: ${res.status}`);
}

const checkSuccess = (res) => {
  if (res && res.success) {
    return res;
  }

  return Promise.reject(`Ответ не success: ${res}`);
}

export const request = (endpoint, options) => {
  return fetch(baseUrl + endpoint, options)
    .then(checkResponse)
    .then(checkSuccess)
}

export const registrationRequest = async (form) => {
  return await request('/auth/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(form)
  })
}

export const loginRequest = async (form) => {
  return await request('/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(form)
  })
}

export const logoutRequest = async (token) => {
  return await request('/auth/logout', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      token: token
    })
  })
}

export const getProfileInfoRequest = async (token) => {
  return await request('/auth/user', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'authorization': token
    }
  })
}

export const resetPasswordRequest = async (from) => {
  return await request('/password-reset/reset', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(from)
  })
}

export const updateTokenRequest = async (token) => {
  return await request('/auth/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      token: token
    })
  })
}

export const editProfileInfoRequest = async (token, form) => {
  return await request('/auth/user', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'authorization': token
    },
    body: JSON.stringify(form)
  })
}