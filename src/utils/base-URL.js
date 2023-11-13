//Базовая ссылка для запросов к серверу
export const BASE_URL = 'https://norma.nomoreparties.space/api';

//Эндпойнты
export const GET_INGREDIENTS_ENDPOINT = `${BASE_URL}/ingredients`;
export const POST_ORDERS_ENDPOINT = `${BASE_URL}/orders`;

//функция checkResponse
export function checkResponse(res) {
    if (res.ok) {
        return res.json();
      } else {
        throw new Error("Request failed");
      }
}