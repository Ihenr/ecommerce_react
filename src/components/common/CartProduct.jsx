import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteProductFromCart,
  updateQuantityProductCart,
} from '../../store/slices/cart.slice';

const CartProduct = ({ product }) => {
  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(product.quantity);

  const token = useSelector((state) => state.user.token);
  const loading = useSelector((state) => state.cart.loading);

  const deleteHandleClick = () => {
    dispatch(deleteProductFromCart({ token, cartProductId: product.cartId }));
  };

  const updateHandleClick = () => {
    dispatch(
      updateQuantityProductCart({ token, cartProductId: product.cartId, quantity }),
    );
  };
  //lessOne hace que la cantidad de productos disminuya en 1
  const lessOne = () => {
    const newQuantity = quantity - 1;
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  return (
    <>
      <article>
        <div className="relative flex flex-row gap-10">
          <div className="w-1/3">
            <img src={product.images[0].url} alt={product.title} />
          </div>
          <div>
            <h3>{product.title}</h3>

            <div className="flex flex-row text-xl ">
              <button
                className=" w-7 h-7 flex flex-row justify-center items-center border border-gray-600"
                onClick={lessOne}
              >
                -
              </button>
              <span className="w-10 h-7  text-center border border-gray-600 flex justify-center items-center">
                {quantity}
              </span>
              <button
                className=" w-7 h-7 flex flex-row justify-center items-center border border-gray-600"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>
            </div>
          </div>

          <div className="flex flex-row gap-5 absolute right-0 bottom-0">
            <button
              className=" bg-cyan-500 text-white rounded p-1"
              onClick={updateHandleClick}
            >
              <i className="bx bxs-cart-add"></i>
            </button>
            <button
              onClick={deleteHandleClick}
              disabled={loading}
              className=" bg-red-500 text-white rounded p-1"
            >
              <i className="bx bxs-trash"></i>
            </button>
          </div>
        </div>

        <p className="text-right mt-2">
          <span>Total:</span>
          <span> ${product.quantity * Number(product.price)}</span>
        </p>
      </article>
      <hr />
    </>
  );
};

export default CartProduct;
