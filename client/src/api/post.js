import axios from "axios";

//BASE URL
// const API = axios.create({ baseURL: "http://localhost:5000/api" });

//REMOTE URL
const API = axios.create({
  baseURL: "https://status-management-app.herokuapp.com/api",
});

//CREATE NEW POST
export const createPost = (newPost, userId, token) =>
  API.post(`/posts/${userId}`, newPost, {
    headers: { Authorization: `Bearer ${token}` },
  });

//FETCHING POSTS
export const fetchPosts = (userId, token) =>
  API.get(`/posts/${userId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });

//DELETE POST
export const deletePost = (id, userId, token) =>
  API.delete(`/posts/${id}/${userId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });

//UPDATe POST
export const updatePost = (id, updatedPost, userId, token) =>
  API.patch(`/posts/${id}/${userId}`, updatedPost, {
    headers: { Authorization: `Bearer ${token}` },
  });
