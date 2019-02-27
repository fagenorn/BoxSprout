import axios from "axios";

const fetchClient = () => {
  const defaultOptions = {
    baseURL: process.env.VUE_APP_API,
    method: "get",
    headers: {
      "Content-Type": "application/json"
    }
  };

  // Create instance
  let instance = axios.create(defaultOptions);

  // Set the AUTH token for any request
  instance.interceptors.request.use(function(config) {
    const token = localStorage.getItem("token");
    token ? (config.headers.Authorization = `Bearer ${token}`) : null;
    return config;
  });

  return instance;
};

export default fetchClient();
