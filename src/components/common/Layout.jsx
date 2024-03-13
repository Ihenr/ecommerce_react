import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Cart from './Cart';

const Layout = () => {
  const [isCartVisible, setIsCartVisible] = useState(false);

  return (
    <>
      <header className="sticky top-0 h-20 p-5 flex flex-row justify-between bg-white border border-b border-gray-400">
        <Link to="/">
          <h1 className="text-3xl text-orange-400 font-semibold">Ecommerce</h1>
        </Link>
        <nav>
          <ul className="flex flex-row gap-5">
            <li>
              <Link to={'/purchase'} className="text-4xl">
                <i className="bx bxs-purchase-tag"></i>
              </Link>
            </li>
            <li>
              <button
                className="text-4xl"
                onClick={() => setIsCartVisible(!isCartVisible)}
              >
                <i className="bx bxs-cart-alt"></i>
              </button>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>footer</footer>
      <Cart isVisible={isCartVisible} />
    </>
  );
};

export default Layout;
