import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductId } from '../services/getProductById';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const loadProduct = async () => {
      const productData = await getProductId(id);
      setProduct(productData);
    };
    loadProduct();
  }, []);

  return (
    <div className="p-8">
      {!product ? (
        <p>Loading...</p>
      ) : (
        <section>
          <div>
            {product.productImgs.map((urlImg) => (
              <img className="w-40 h-40" src={urlImg} key={urlImg} alt=""></img>
            ))}
          </div>
          <div>
            <section>
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
                  <button className=" w-10 h-10 flex flex-row justify-center items-center border border-gray-600">
                    -
                  </button>
                  <span className="w-10  text-center border border-gray-600">1</span>
                  <button className=" w-10 h-10 flex flex-row justify-center items-center border border-gray-600">
                    +
                  </button>
                </div>
              </div>
            </section>

            <button>
              Add to cart<i className="bx bx-cart-add"></i>
            </button>
          </div>
        </section>
      )}

      <aside>
        <h2> Discover similar Items</h2>
        <ul>
          {/* ProductCard */}
          Aqui la lista de productos
        </ul>
      </aside>
    </div>
  );
};

export default ProductDetail;
