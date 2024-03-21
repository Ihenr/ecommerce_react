import { createSlice } from '@reduxjs/toolkit';
import { getCart } from '../../services/getCart';
import { addToCart } from '../../services/addToCart';
import { deleteFromCart } from '../../services/deleteFromCart';

const initialState = {
  products: [],
  loading: false,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // establecer la lista de productos
    setCartProduct(state, action) {
      state.products = action.payload;
    },

    setCartLoading(state, action) {
      state.loading = action.payload;
    },
  },
});

const { setCartProduct, setCartLoading } = cartSlice.actions;

// se ejecuta logica sincrona ---TUNK ---Debuelve una funcion
export const loadCardProducts = (token) => async (dispatch) => {
  //Establecer el loading a true
  dispatch(setCartLoading(true));

  const cart = await getCart(token);
  dispatch(setCartProduct(cart));
  dispatch(setCartLoading(false));
};

export const addProductToCart =
  ({ token, quantity, productId }) =>
  async (dispatch) => {
    dispatch(setCartLoading(true));

    await addToCart({ token, quantity, productId });

    dispatch(loadCardProducts(token));
  };
// Eliminar productos del carrito
export const deleteProductFromCart =
  ({ token, cartProductId }) =>
  async (dispatch) => {
    dispatch(setCartLoading(true));
    await deleteFromCart({ token, cartProductId });
    dispatch(loadCardProducts(token));
  };
export default cartSlice.reducer;
