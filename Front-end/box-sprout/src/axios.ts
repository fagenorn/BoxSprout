import axios from "axios";

export default axios.create({
  baseURL: process.env.VUE_APP_API,
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer " + localStorage.token
  }
});
