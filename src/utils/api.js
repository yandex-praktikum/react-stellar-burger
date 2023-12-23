import { PROFILE_ENDPOINT, checkResponse } from "./base-URL";
import { POST_REGISTER_ENDPOINT } from "./base-URL";
import { POST_PASSWORD_RESET_ENDPOINT } from "./base-URL";
import { POST_RESET_ENDPOINT } from "./base-URL";
import { setUser } from "../services/actions/user-actions";
import { fetchWithRefresh } from "./reset-api";

export const register = (name, pass, email) => {
  return fetch(POST_REGISTER_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: pass,
      name: name,
    }),
  })
    .then((res) => checkResponse(res))
    .then((res) => {
      // Сохраняем accessToken и refreshToken в localStorage
      localStorage.setItem("accessToken", res.accessToken);
      localStorage.setItem("refreshToken", res.refreshToken);
      return res;
    })
};

export const forgotPassword = (email) => {
  return fetch(POST_PASSWORD_RESET_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
    }),
  }).then((res) => checkResponse(res));
};

export function postApiResetPassword(email) {
  forgotPassword(email)
    .then((res) => {
      console.log(res);
      localStorage.setItem("resetPasswordFlag", true);
    });
}

export const resetPassword = (newPassword, token) => {
  return fetch(POST_RESET_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      password: newPassword,
      token: token,
    }),
  }).then((res) => checkResponse(res));
};

export function postApiReset(newPassword, token) {
  resetPassword(newPassword, token)
    .then((res) => {
      console.log(res);
      localStorage.removeItem("resetPasswordFlag");
    });
}

//6. Обновление данных пользователя.

export const updateUser = (email, name, password) => {
  return (dispatch) => {
    return fetchWithRefresh(PROFILE_ENDPOINT, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        authorization: localStorage.getItem("accessToken"),
      },
      body: JSON.stringify({
        email,
        name,
        password,
      }),
    }).then((res) => {
      console.log("resUpd", res);
      dispatch(setUser(res.user));
    });
  };
};