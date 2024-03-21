import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProductFromCart } from '../../store/slices/cart.slice';

const CartProduct = ({ product }) => {
  const dispatch = useDispatch();

  const token = useSelector((state) => state.user.token);
  const loading = useSelector((state) => state.cart.loading);

  const deleteHandleClick = () => {
    dispatch(deleteProductFromCart({ token, cartProductId: product.cartId }));
  };

  return (
    <article>
      <div className="relative flex flex-row gap-10">
        <div className="w-1/3">
          <img src={product.images[0].url} alt={product.title} />
        </div>
        <div>
          <h3>{product.title}</h3>

          <div className="flex flex-row text-xl ">
            <button className=" w-7 h-7 flex flex-row justify-center items-center border border-gray-600">
              -
            </button>
            <span className="w-10 h-7  text-center border border-gray-600 flex justify-center items-center">
              {product.quantity}
            </span>
            <button className=" w-7 h-7 flex flex-row justify-center items-center border border-gray-600">
              +
            </button>
          </div>
        </div>
        <button
          onClick={deleteHandleClick}
          disabled={loading}
          className="absolute right-0 bottom-0 bg-red-500 text-white rounded"
        >
          <i className="bx bxs-trash"></i>
        </button>
      </div>

      <p className="text-right mt-2">
        <span>Total:</span>
        <span>{product.quantity * Number(product.price)}</span>
      </p>
    </article>
  );
};

export default CartProduct;
