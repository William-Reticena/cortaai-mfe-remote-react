import { createBrowserRouter } from 'react-router';
import { BarbershopListing } from '../views/BarbershopListing';
import { BarbershopDetails } from '../views/BarbershopDetails';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <BarbershopListing />,
  },
  {
    path: '/barbershop/:id',
    element: <BarbershopDetails />,
  },
  {
    path: '*',
    element: <h1>404 Not Found</h1>,
  },
]);
