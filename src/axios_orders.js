import axios from "axios";

const instance = axios.create({
  baseURL: "https://burger-8b4da-default-rtdb.firebaseio.com/",
});

export default instance;
