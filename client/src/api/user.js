import axios from "axios";

//BASE URL
// const API = axios.create({ baseURL: "http://localhost:5000/api" });

//REMOTE URL
const API = axios.create({
  baseURL: "https://status-management-app.herokuapp.com/api",
});

//CREATE NEW POST
export const fetchAllUsers = (id, token) =>
  API.get(`/users/${id}`, { headers: { Authorization: `Bearer ${token}` } });
