export const BASE_URL = 'https://norma.nomoreparties.space/api';

export const GET_INGREDIENTS_ENDPOINT = `${BASE_URL}/ingredients`;
export const POST_ORDERS_ENDPOINT = `${BASE_URL}/orders`;

export function checkResponse(res) {
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Request failed");
  }
}