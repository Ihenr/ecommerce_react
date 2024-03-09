import { axiosInstance } from '../api/axiosInstance';
export const getProductId = async (id) => {
  try {
    const res = await axiosInstance.get(`products/${id}`);
    console.log(res.data.data.product);
    return res.data.data.product;
  } catch (error) {
    console.error(error);
  }
};
