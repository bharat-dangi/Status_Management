import axios from "axios";

//BASE URL
// const API = axios.create({ baseURL: "http://localhost:5000/api" });

//REMOTE URL
const API = axios.create({
  baseURL: "https://status-management-app.herokuapp.com/api",
});

//LOGIN API CALL
export const signIn = (formData) => API.post(`/auth/signin`, formData);

//REGISTER API CALL
export const signUp = (formData) => API.post(`/auth/signup`, formData);

//LOGOUT API CALL
export const logOut = () => API.get("auth/signout");
