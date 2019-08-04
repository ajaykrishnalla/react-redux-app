import { LOGIN_USER } from "../actions/types";

const intialState = {
  isAuthenticated: false
};
export default (state = intialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        isAuthenticated: true
      };
    default:
      return state;
  }
};
