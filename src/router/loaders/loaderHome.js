import { getAllProducts } from '../../services/getAllProducts';
import { getCategories } from '../../services/getCategories';

export const loaderHome = async ({ request }) => {
  // const products = await getAllProducts();
  const categories = await getCategories();

  const url = new URL(request.url);
  const categoryId = url.searchParams.get('category');
  const title = url.searchParams.get('title'); // para buscar  por nombre ingresado en el input

  let products;

  if (categoryId) {
    products = await getAllProducts({ category: categoryId });
  } else if (title) {
    products = await getAllProducts({ query: title });
  } else {
    products = await getAllProducts();
  }

  return {
    products,
    categories,
    category: categories.find((x) => x.id.toString() === categoryId),
    title,
  };
};
