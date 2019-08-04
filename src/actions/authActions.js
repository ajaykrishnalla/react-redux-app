import { LOGIN_USER } from "./types";
export const login = () => dispatch => {
  dispatch({
    type: LOGIN_USER,
    payload: true
  });
};
