import { POST_TOKEN_ENDPOINT } from "./base-URL";


export const refreshToken = () => {
    return fetch(POST_TOKEN_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({
        token: localStorage.getItem("refreshToken"),
      }),
    });
  };

  export const fetchWithRefresh = async (url, options) => {
    try {
      return await fetch(url, options);;
    } catch (err) {
      if (err.message === "jwt expired") {
        const refreshData = await refreshToken(); //обновляем токен
        if (!refreshData.success) {
          return Promise.reject(refreshData);
        }
        localStorage.setItem("refreshToken", refreshData.refreshToken);
        localStorage.setItem("accessToken", refreshData.accessToken);
        options.headers.authorization = refreshData.accessToken;
        return await fetch(url, options); //повторяем запрос
      } else {
        return Promise.reject(err);
      }
    }
  };