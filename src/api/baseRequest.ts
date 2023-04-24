import axios from "axios";

const baseRequest = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export default baseRequest;
