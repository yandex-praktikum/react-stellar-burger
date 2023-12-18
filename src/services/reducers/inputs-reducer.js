import { USER_NAME, PASSWORD, EMAIL, NEW_PASSWORD, TOKEN } from "../actions/inputs-actions";
  
  const initialState = {
    userName: "",
    password: "",
    email: "",
    token: "",
    newPassword: ""
  };
  
  export function inputsReducer(state = initialState, action) {
    switch (action.type) {
      case USER_NAME:
        return {
          ...state,
          userName: action.payload,
        };
      case PASSWORD:
        return {
          ...state,
          password: action.payload,
        };
      case EMAIL:
        return {
          ...state,
          email: action.payload,
        };
      case NEW_PASSWORD:
        return {
          ...state,
          newPassword: action.payload,
        };
      case TOKEN: 
        return {
          ...state,
          token: action.payload
        }
      default: {
        return state;
      }
    }
  }