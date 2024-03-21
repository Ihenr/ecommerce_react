import { axiosInstance } from '../api/axiosInstance';

export const getCart = async (token) => {
  try {
    const res = await axiosInstance.get('cart', {
      headers: { Authorization: `Bearer ${token}` },
    });

    return res.data.map((carProduct) => ({
      ...carProduct.product,
      cartId: carProduct.id,
      quantity: carProduct.quantity,
    }));
  } catch (error) {
    console.error(error);
  }
};
