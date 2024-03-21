import { axiosInstance } from '../api/axiosInstance';

export const deleteFromCart = async ({ token, cartProductId }) => {
  try {
    const res = await axiosInstance.delete(`cart/${cartProductId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  } catch (error) {
    console.error('Error al eliminar producto del carrito:', error);
  }
};
