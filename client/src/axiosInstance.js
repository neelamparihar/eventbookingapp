import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL, // Use the environment variable as the base URL
  timeout: 10000, // Optional timeout
});

export default instance;
