import axios from "axios";

const instance = axios.create({
  baseURL: "https://nomsan-376f9-default-rtdb.firebaseio.com"
});

export default instance;
