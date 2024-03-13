import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadCardProducts } from '../../store/slices/cart.slice';
import CartProduct from './CartProduct';

const Cart = ({ isVisible }) => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.user.token);
  const cart = useSelector((state) => state.cart);
  const toggleTransform = isVisible ? 'translate-x-0' : 'translate-x-full';

  useEffect(() => {
    //Ejecutar carga de los productos del carrito
    if (isVisible) {
      dispatch(loadCardProducts(token));
    }
  }, [isVisible]);

  return (
    <div
      className={
        'fixed inset-0 top-20  bg-[rgba(0,0,0,0.45)] transition-transform duration-500 backdrop-blur-sm ' +
        toggleTransform
      }
    >
      <section className="absolute right-0 max-w-[350px] w-full h-full bg-white p-3 flex flex-col">
        <h2>Shopping Cart</h2>
        <div className="mt-5 flex-grow">
          {cart.loading && <p> Loading cart Products...</p>}
          {!cart.loading && !cart.products.length && <p> You cart is empty</p>}
          {!cart.loading && cart.products.length && (
            <ul>
              {cart.products.map((product) => (
                <li key={product.id}>
                  <CartProduct product={product} />
                </li>
              ))}
            </ul>
          )}
        </div>

        <section>
          <p className="flex flex-row justify-between">
            <span>Total: </span> <span>$8000</span>
          </p>
          <button className="w-full bg-orange-400 py-3 px-2 text-white font-bold">
            Buy products
          </button>
        </section>
      </section>
    </div>
  );
};

export default Cart;
