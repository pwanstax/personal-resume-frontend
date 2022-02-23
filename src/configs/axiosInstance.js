import axios from "axios";

const config = {
  headers: { "No-CSRF": true },
  withCredentials: true,
  baseURL: "http://localhost:8080/",
};
export const apiClient = axios.create(config);
