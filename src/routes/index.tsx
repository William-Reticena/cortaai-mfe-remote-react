import { createBrowserRouter } from 'react-router';
import { BarbershopListing } from '../views/BarbershopListing';
import { BarbershopDetails } from '../views/BarbershopDetails';

export function createRouter() {
  return createBrowserRouter(
    [
      {
        index: true,
        element: <BarbershopListing />,
      },
      {
        path: 'barbershop/:id',
        element: <BarbershopDetails />,
      },
      {
        path: '*',
        element: <h1>404 Not Found</h1>,
      },
    ],
    {
      basename: '/c',
    },
  );
}
