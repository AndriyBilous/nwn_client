import axios from "axios";

const instance = axios.create({
  baseURL: "https://nwn-server.onrender.com/api",
});

export default instance;
