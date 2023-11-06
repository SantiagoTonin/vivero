import axios from "axios";

export const createImageRequest = async (formdata) => {
  return await axios.post("http://localhost:4000/api/images", formdata);
};

export const getImagesByProductIdRequest = async (productId) => {
  return await axios.get(
    `http://localhost:4000/api/images/?productId=${productId}`
  );
};
