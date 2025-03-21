import axios from "axios";
 import { GetUserCredentials } from "../utils/HelperFunction.utils";


export const axiosInstance = axios.create({
  baseURL: "https://devybe-backend.onrender.com", 
  headers: {
    "Content-Type": "application/json",
  },
});


axiosInstance.interceptors.request.use(
  async (config) => {
    const tokenToUse = config.url.includes("api/") ? JSON.parse(localStorage.getItem("tokens")).access : null;
    if (tokenToUse) {
      config.headers.Authorization = `Bearer ${tokenToUse}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error); 
  }
);