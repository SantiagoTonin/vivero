import axios from "axios";

export const loginRequest = async (data) => {
  return axios.post("http://localhost:4000/api/login", data);
};
