import axios, { AxiosInstance } from "axios";

const axiosInstance: AxiosInstance = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
});

// Centralized error handling for API requests.
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // We can define cases for different types of errors here.
    // ex: redirect to login page or to home page depending on the status code
    console.error("Error:", error);
    return Promise.reject(error);
  }
);

export default axiosInstance;
