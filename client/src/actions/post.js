import * as api from "../api/post";
import { CREATE, DELETE, FETCH, UPDATE } from "../constants/post";

export const createPost = (post, userId, token) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post, userId, token);
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const fetchPosts = (userId, token) => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts(userId, token);
    dispatch({ type: FETCH, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = (id, userId, token) => async (dispatch) => {
  try {
    await api.deletePost(id, userId, token);
    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
};

export const updatePost =
  (id, updatedPost, userId, token) => async (dispatch) => {
    try {
      const { data } = await api.updatePost(id, updatedPost, userId, token);
      dispatch({ type: UPDATE, payload: data });
    } catch (error) {
      console.log(error);
    }
  };
