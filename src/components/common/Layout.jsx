import { useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import Cart from './Cart';
import { useSelector } from 'react-redux';
import Footer from './footer/Footer';

const Layout = () => {
  const navigate = useNavigate();
  const [isCartVisible, setIsCartVisible] = useState(false);

  //vemos si el usuario esta logeado
  const isLogged = useSelector((state) => state.user.isLogged);

  const cartHandleClick = () => {
    if (isLogged) setIsCartVisible(!isCartVisible);
    else navigate('/login');
  };

  return (
    <>
      <header className="sticky top-0 h-20 p-5 flex flex-row justify-between bg-white border border-b border-gray-400 z-10">
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
                // onClick={() => setIsCartVisible(!isCartVisible)}
                onClick={cartHandleClick}
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

      <Footer />
      <Cart isVisible={isCartVisible} />
    </>
  );
};

export default Layout;
