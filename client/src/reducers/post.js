import { CREATE, DELETE, FETCH, UPDATE } from "../constants/post";

const postReducer = (state = { posts: [] }, action) => {
  switch (action.type) {
    case FETCH:
      return { ...state, posts: action?.payload };

    case CREATE:
      return { ...state, posts: [...state.posts, action?.payload] };

    case DELETE:
      return {
        ...state,
        posts: state.posts.filter((post) => post._id !== action?.payload),
      };

    case UPDATE:
      return {
        ...state,
        posts: state.posts.map((post) =>
          post._id === action.payload._id ? action.payload : post
        ),
      };

    default:
      return state;
  }
};

export default postReducer;
