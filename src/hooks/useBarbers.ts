import { useQuery } from '@tanstack/react-query';
import { BarbersApi } from '../api/BarbersApi';

export const useListBarbershops = () => {
  return useQuery({
    queryKey: ['barbershops'],
    queryFn: async () => {
      return BarbersApi.getListBarbershops();
    },
  });
};

export const useBarbershopDetails = (id: number | string) => {
  const idNumber = Number(id);

  if (isNaN(idNumber)) {
    throw new Error('Invalid barbershop ID');
  }

  return useQuery({
    queryKey: ['barbershop', idNumber],
    enabled: !!id,
    queryFn: async () => {
      return BarbersApi.getBarbershopDetails(idNumber);
    },
  });
};
