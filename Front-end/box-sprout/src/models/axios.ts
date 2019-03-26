import axios from "axios";
import i18n from "@/i18n";

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
    config.headers["Content-Language"] = i18n.locale;
    return config;
  });

  return instance;
};

export default fetchClient();
