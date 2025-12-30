import axios from "axios";

export const http = axios.create({
  baseURL: "http://localhost:9090/person-rest/api",
  headers: {
    "Content-Type": "application/json",
  },
});
