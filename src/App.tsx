import './App.css';
import { RouterProvider } from 'react-router/dom';
import { router } from './routes';
import { ChakraProvider } from '@chakra-ui/react';
import { system } from './chakra';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider value={system}>
        <RouterProvider router={router} />
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default App;
