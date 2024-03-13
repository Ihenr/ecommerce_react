import { getAllProducts } from '../../services/getAllProducts';
import { getCategories } from '../../services/getCategories';

export const loaderHome = async ({ request }) => {
  // const products = await getAllProducts();
  const categories = await getCategories();

  const url = new URL(request.url);
  const categoryId = url.searchParams.get('category');
  const title = url.searchParams.get('title'); // para buscar  por nombre ingresado en el input

  let products;

  if (categoryId && title) {
    products = await getAllProducts({ categoryId, title });
  } else if (title) {
    products = await getAllProducts({ title });
  } else if (categoryId) {
    products = await getAllProducts({ categoryId });
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
