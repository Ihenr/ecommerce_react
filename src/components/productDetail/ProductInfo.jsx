import React, { useState } from 'react';

const ProductDescription = ({ product }) => {
  const [counter, setCounter] = useState(1);

  // lessOne Funcin para disminuir el contador
  const lessOne = () => {
    const newCounter = counter - 1;

    if (newCounter >= 1) setCounter(newCounter);
  };

  return (
    <section>
      <div>
        {product.images.map((img) => (
          <img className="w-40 h-40" src={img.url} key={img.id} alt=""></img>
        ))}
      </div>
      <div>
        <section>
          <p className=" font-semibold text-gray-400">{product.brand}</p>
          <h1 className=" text-3xl text-black font-semibold">{product.title}</h1>
          <p className="mt-5">{product.description}</p>
        </section>

        <section className=" flex flex-row gap-32 mt-5">
          <div>
            <h2 className=" font-semibold text-gray-400">Price</h2>
            <p className="text-2xl text-black font-semibold"> $ {product.price}</p>
          </div>

          <div>
            <h2 className=" font-semibold text-gray-400">Quantity</h2>
            <div className="flex flex-row text-2xl ">
              <button
                className=" w-10 h-10 flex flex-row justify-center items-center border border-gray-600"
                onClick={lessOne}
              >
                -
              </button>
              <span className="w-10  text-center border border-gray-600">{counter}</span>
              <button
                className=" w-10 h-10 flex flex-row justify-center items-center border border-gray-600"
                onClick={() => setCounter(counter + 1)}
              >
                +
              </button>
            </div>
          </div>
        </section>

        <button className="w-full mt-5 p-3 bg-orange-400">
          Add to cart<i className="bx bx-cart-add"></i>
        </button>
      </div>
    </section>
  );
};

export default ProductDescription;
