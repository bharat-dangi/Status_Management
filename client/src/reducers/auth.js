import { AUTH, LOGIN_ERROR, LOGOUT } from "../constants/auth";

const authReducer = (state = { authData: null, error: null }, action) => {
  switch (action.type) {
    case AUTH:
      localStorage.setItem("profile", JSON.stringify({ ...action?.payload }));
      return { ...state, authData: action?.payload };

    case LOGIN_ERROR:
      return {
        ...state,
        error: action.payload?.error
          ? action.payload?.error
          : "Problem in Sign In, Try Again",
      };

    case LOGOUT:
      localStorage.clear();
      return { ...state, authData: null, error: null };

    default:
      return state;
  }
};

export default authReducer;
