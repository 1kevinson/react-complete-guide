import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-my-burger-9f990.firebaseio.com/",
  // FIX CORS problem
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  },
});

export default instance;
