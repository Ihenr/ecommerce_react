import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { reset } from '../store/slices/user.slice';
import { Form, useLoaderData } from 'react-router-dom';
import ProductCard from '../components/common/ProductCard';
import { loadCardProducts } from '../store/slices/cart.slice';
import Logout from './Logout';

const Home = () => {
  const dispatch = useDispatch();
  const { isLogged, token } = useSelector((state) => state.user);
  const { products, categories, category, title } = useLoaderData();
  const [categoryValue, setCategoryValue] = useState(category ?? null);

  const [nameValue, setNameValue] = useState(title ?? '');

  const handleChangeName = (e) => {
    setNameValue(e.target.value);
  };

  useEffect(() => {
    if (isLogged) dispatch(loadCardProducts(token));
  }, []);

  useEffect(() => {
    setCategoryValue(category);
  }, [category]);
  useEffect(() => {
    setNameValue(title);
  }, [title]);

  return (
    <div className="w-full h-screens flex flex-row  z-0 overflow-hidden">
      <section className=" w-[30%] border-r px-5 shadow-[4px_0px_8px_0px_rgba(0,0,0,0.2)]">
        <Form className="fixed top-28 ">
          <div>
            <input
              type="search"
              name="title"
              value={nameValue}
              onChange={handleChangeName}
              placeholder="typeProduct"
              className="w-full p-2 border border-gray-400 rounded-xl mb-7"
            />
          </div>
          <fieldset>
            <legend className=" w-full uppercase border-b text-2xl font-semibold mb-3">
              Categories
            </legend>
            {categories.map((category) => (
              <div
                key={category.id}
                className=" py-2 text-xl hover:bg-orange-100 rounded-xl px-3"
              >
                <label
                  htmlFor={category.id + category.name}
                  className={` w-full block  rounded-xl   ${
                    categoryValue?.id === category.id
                      ? 'text-orange-400 font-semibold bg-orange-200 py-2 px-3'
                      : ''
                  }`}
                >
                  {category.name}
                </label>
                <input
                  type="radio"
                  name="category"
                  value={category.id}
                  checked={categoryValue?.id === category.id}
                  id={category.id + category.name}
                  onChange={() => {
                    setCategoryValue(category);
                  }}
                  style={{ display: 'none' }}
                />
              </div>
            ))}
          </fieldset>
          <button
            type="submit"
            className=" w-full flex flex-row justify-center items-center mt-4 p-2 bg-orange-400 rounded-xl z-0 uppercase font-semibold hover:text-white hover:bg-orange-500"
          >
            Filter
          </button>
        </Form>
      </section>

      <section className="w-[70%] h-full p-10">
        <ul className=" w-full flex flex-row flex-wrap gap-7">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ul>
        {!products.length && <p> `No product matches the search {nameValue} ` </p>}
      </section>
    </div>
  );
};

export default Home;
