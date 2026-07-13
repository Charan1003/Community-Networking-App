import axios from "axios";

export const BASE_URL = "https://community-networking-app.onrender.com";
export const clientServer = axios.create({
  baseURL: BASE_URL,
});
