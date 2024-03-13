import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductId } from '../services/getProductById';
import { getAllProducts } from '../services/getAllProducts';

import ProductCard from '../components/common/ProductCard';
import ProductInfo from '../components/productDetail/ProductInfo';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const [relateProducts, setRelateProducts] = useState([]);

  useEffect(() => {
    const loadDataProduct = async () => {
      const productData = await getProductId(id);

      const categoryId = productData.categoryId;

      const relateProductsData = await getAllProducts({ categoryId }); //obtiene todos los productos que tengan la misma categoria

      const relatedProducstsWithoutTargetProduct = relateProductsData.filter(
        (product) => product.id !== productData.id,
      ); // filtra los productos que no sean el mismo

      setProduct(productData);
      setRelateProducts(relatedProducstsWithoutTargetProduct);
    };

    loadDataProduct();
  }, [id]);

  return (
    <div className="p-8">
      {!product ? <p>Loading...</p> : <ProductInfo product={product} />}

      <aside>
        <h2 className="text-xl font-semibold text-orange-400"> Discover similar Items</h2>
        <ul>
          {relateProducts.map((product) => (
            <li key={product.id}>
              <ProductCard product={product} />
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
};

export default ProductDetail;
