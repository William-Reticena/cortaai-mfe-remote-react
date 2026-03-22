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
  return useQuery({
    queryKey: ['barbershop', id],
    enabled: !!id,
    queryFn: async () => {
      return BarbersApi.getBarbershopDetails(Number(id));
    },
  });
};
