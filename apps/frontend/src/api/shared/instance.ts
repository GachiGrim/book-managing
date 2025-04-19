import axios from "axios";

export const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer YOUR_TOKEN",
  },
});
