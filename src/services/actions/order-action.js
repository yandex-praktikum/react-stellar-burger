import { POST_ORDERS_ENDPOINT } from "../../utils/base-URL";
import { checkResponse } from "../../utils/base-URL";

export const POST_ORDER_REQUEST = "POST_ORDER_REQUEST";
export const POST_ORDER_SUCCESS = "POST_ORDER_SUCCESS";
export const POST_ORDER_FAILURE = "POST_ORDER_FAILURE";
export const RESET_ORDER = "RESET_ORDER";

export function postOrderSuccess(orderNumber) {
  return {
    type: POST_ORDER_SUCCESS,
    payload: orderNumber,
  };
}

export function postOrderFailure() {
  return {
    type: POST_ORDER_FAILURE,
  };
}

export function postOrderRequest() {
  return {
    type: POST_ORDER_REQUEST,
  };
}

export function resetOrder() {
  return {
    type: RESET_ORDER,
  };
}

export function getBurgerOrder(data) {
  console.log(data);
  return function (dispatch) {
    dispatch(postOrderRequest());
    fetch(POST_ORDERS_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ingredients: data }),
    })
      .then((res) => checkResponse(res))
      .then((data) => {
        const orderNumber = data.order.number;
        dispatch(postOrderSuccess(orderNumber));
      })
      .catch(() => {  
        dispatch(postOrderFailure());
      });
  };
}
