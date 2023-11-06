import axios from "axios";

export const requestLogueado=async(id)=>{
  return await axios.post("http://localhost:4000/api/logeado",id)
} 