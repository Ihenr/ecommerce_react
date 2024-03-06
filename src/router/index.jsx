import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/common/Layout';
import Home from '../views/Home';
import Login from '../views/Login';
import Purchanse from '../views/Purchanse';
import ProductDetail from '../views/ProductDetail';
import NotFound from '../views/NotFound';
import ProtecteRoute from '../components/common/ProtecteRoute';

export const router = createBrowserRouter([
  // Add your routes here
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/purchase',
        element: (
          <ProtecteRoute>
            <Purchanse />
          </ProtecteRoute>
        ),
      },
      {
        path: '/products/:id',
        element: <ProductDetail />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);
