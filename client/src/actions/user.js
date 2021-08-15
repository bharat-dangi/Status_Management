import * as api from "../api/user";
import { FETCH_ALL_USERS } from "../constants/user";

export const fetchAllUsers = (id, token) => async (dispatch) => {
  try {
    const { data } = await api.fetchAllUsers(id, token);
    dispatch({ type: FETCH_ALL_USERS, payload: data });
  } catch (error) {
    console.log(error);
  }
};
