import { createBrowserRouter } from 'react-router';
import { BarbershopListing } from '../views/BarbershopListing';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <BarbershopListing />,
  },
  {
    path: '*',
    element: <h1>404 Not Found</h1>,
  },
]);
