import axios from "axios";

const instance = axios.create({
  baseURL: "https://andriybilous.github.io/nwn_server_api/api",
});

export default instance;
