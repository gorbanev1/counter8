import { createBrowserRouter, Navigate } from 'react-router';
import { App } from '../App';
import { Abibas } from '../components/pages/Abibas';
import { Adidas } from '../components/pages/Adidas';
import { Error404 } from '../components/pages/Error404';
import { Prices } from '../components/pages/Prices';
import { Puma } from '../components/pages/Puma';
import { PATHS } from './paths';

export const router = createBrowserRouter([
  {
    path: PATHS.HOME,
    element: <App />,
    errorElement: <Error404 />,
    children: [
      {
        index: true,
        element: <Navigate to={PATHS.ADIDAS} replace />,
      },
      {
        path: PATHS.ADIDAS,
        element: <Adidas />,
      },
      {
        path: PATHS.PUMA,
        element: <Puma />,
      },
      {
        path: PATHS.ABIBAS,
        element: <Abibas />,
      },
      {
        path: PATHS.PRICES,
        element: <Prices />,
      },
    ],
  },
]);
