import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const { isLogged, token } = useSelector((state) => state.user);

  const handleAddProductBtn = (e) => {
    e.stopPropagation();
  };

  return (
    // <Link to={`products/${product.id}`}>
    <article
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
        <button
          onClick={handleAddProductBtn}
          className="flex flex-row justify-center items-center text-3xl p-2 bg-orange-400 rounded-xl cursor-pointer"
        >
          <i className="bx bx-cart-add"></i>
        </button>
      </div>
    </article>
    // </Link>
  );
};

export default ProductCard;
