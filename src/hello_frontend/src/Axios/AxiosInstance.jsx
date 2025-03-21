import axios from "axios";



export const axiosInstance = axios.create({
  baseURL: "http://localhost:4100", 
  headers: {
    "Content-Type": "application/json",
  },
});


axiosInstance.interceptors.request.use(
  async (config) => {
    const tokenToUse =  JSON.parse(localStorage.getItem("tokens")).x_auth_access_token ;
    if (tokenToUse) {
      config.headers.Authorization = `Bearer ${tokenToUse}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error); 
  }
);