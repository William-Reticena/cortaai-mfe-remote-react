import { useMemo } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider } from 'react-router';

import './App.css';
import './index.css';
import { createRouter } from './routes';

const queryClient = new QueryClient();

function App() {
  const router = useMemo(() => createRouter(), []);

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
