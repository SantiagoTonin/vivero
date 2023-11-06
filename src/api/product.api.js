import axios from "axios";

export const getProductRequest = async () =>
  await axios.get("http://localhost:4000/api/products");

  export const getCustomProductRequest = async () =>
  await axios.get("http://localhost:4000/api/products/custom")
  .then(res => {console.log(res)});

  export const createProductRequest = async (product) =>
  await axios.post("http://localhost:4000/api/products", product);
