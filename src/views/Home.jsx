import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { reset } from '../store/slices/user.slice';
import { Form, useLoaderData } from 'react-router-dom';
import ProductCard from '../components/common/ProductCard';

const Home = () => {
  const dispatch = useDispatch();
  const isLogged = useSelector((state) => state.user.isLogged);
  const { products, categories, category } = useLoaderData();
  const [categoryValue, setCategoryValue] = useState(category ?? null);

  const [nameValue, setNameValue] = useState('');

  const handleChangeName = (e) => {
    setNameValue(e.target.value);
    setCategoryValue(null);
  };

  return (
    <div>
      <h1>Home</h1>
      {isLogged && <button onClick={() => dispatch(reset())}>logOut</button>}

      <section>
        <Form>
          <div>
            <input
              type="search"
              name="query"
              value={nameValue}
              onChange={handleChangeName}
              placeholder="typeProduct"
            />
          </div>
          <fieldset>
            <legend>Category</legend>
            {categories.map((category) => (
              <div key={category.id}>
                <label
                  htmlFor={category.id + category.name}
                  className={
                    categoryValue?.id === category.id
                      ? 'text-orange-400 font-semibold'
                      : ''
                  }
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
                    setNameValue('');
                  }}
                  style={{ display: 'none' }}
                />
              </div>
            ))}
          </fieldset>
          <button
            type="submit"
            className=" flex flex-row justify-center items-center p-2 bg-orange-400 rounded-xl"
          >
            Filter
          </button>
        </Form>
      </section>

      <section>
        <ul>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Home;
