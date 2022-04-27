import axios from "axios";

export const api = axios.create({
  baseURL: "https://hackdoagora-backend.herokuapp.com/api/auth",
});
