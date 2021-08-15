import * as api from "../api/auth";
import { AUTH, LOGIN_ERROR, LOGOUT } from "../constants/auth";

export const signIn = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);
    dispatch({ type: AUTH, payload: data });
    if (data.user.role === 1) {
      history.push("/admin");
    } else {
      history.push("/");
    }
  } catch (error) {
    dispatch({ type: LOGIN_ERROR, payload: error.response.data });
  }
};

export const signUp = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);
    dispatch({ type: AUTH, payload: data });
    history.push("/");
  } catch (error) {
    console.log(error);
  }
};

export const logOut = () => async (dispatch) => {
  try {
    await api.logOut();
    dispatch({ type: LOGOUT });
  } catch (error) {
    console.log(error);
  }
};
