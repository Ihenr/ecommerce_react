import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addProductToCart } from '../../store/slices/cart.slice';
// import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isLogged, token } = useSelector((state) => state.user);
  const cart = useSelector((state) => state.cart);

  const isProductIncart = cart.products.some(
    (carProduct) => carProduct.id === product.id,
  );

  const handleAddProductBtn = (e) => {
    e.stopPropagation();
    if (isLogged) {
      dispatch(addProductToCart({ token, quantity: 1, productId: product.id }));
    } else {
      navigate('/login');
    }
  };

  return (
    // <Link to={`products/${product.id}`}>
    <article
      key={product.id}
      onClick={() => navigate(`/products/${product.id}`)}
      className=" cursor-pointer"
    >
      <div className=" max-w-[250px]">
        <img src={product.images[0].url} alt={product.title} />
      </div>
      <div>
        <p>{product.brand}</p>
        <h2 className="text-semibold text-xl">{product.title}</h2>
        <div>
          <h3>Price</h3>
          <p>$ {product.price}</p>
        </div>
        {!isProductIncart && (
          <button
            onClick={handleAddProductBtn}
            disabled={cart.loading}
            className="flex flex-row justify-center items-center text-3xl p-2 bg-orange-400 rounded-xl cursor-pointer"
          >
            <i className="bx bx-cart-add"></i>
          </button>
        )}
        {isProductIncart && <p className="text-orange-500"> This Products is the cart</p>}
      </div>
    </article>
    // </Link>
  );
};

export default ProductCard;
