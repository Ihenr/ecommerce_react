import React from 'react';

const CartProduct = ({ product }) => {
  return (
    <article>
      <div className="flex flex-row gap-10">
        <div>
          <img src="" alt="" />
          <span>Imge</span>
        </div>
        <div>
          <h3>Product Name</h3>

          <div className="flex flex-row text-2xl ">
            <button className=" w-7 h-7 flex flex-row justify-center items-center border border-gray-600">
              -
            </button>
            <span className="w-10 h-7  text-center border border-gray-600 flex justify-center items-center">
              1
            </span>
            <button className=" w-7 h-7 flex flex-row justify-center items-center border border-gray-600">
              +
            </button>
          </div>
        </div>
      </div>

      <p className="text-right mt-2">
        <span>Total:</span> $ 1000.00
      </p>
    </article>
  );
};

export default CartProduct;
