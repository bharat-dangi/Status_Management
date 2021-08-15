import { FETCH_ALL_USERS } from "../constants/user";

const userReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case FETCH_ALL_USERS:
      return { ...state, users: action.payload };

    default:
      return state;
  }
};

export default userReducer;
