import { useMutation, useQuery } from '@tanstack/react-query';
import { BarbersApi } from '../api/BarbersApi';
import type { CreateAppointmentRequest } from '../shared/dtos/request';

export const useListBarbershops = () => {
  return useQuery({
    queryKey: ['barbershops'],
    queryFn: async () => BarbersApi.getListBarbershops(),
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
    queryFn: async () => BarbersApi.getBarbershopDetails(idNumber),
  });
};

export const useScheduleAppointment = () => {
  return useMutation({
    mutationKey: ['scheduleAppointment'],
    mutationFn: async (request: CreateAppointmentRequest) => {
      return BarbersApi.scheduleAppointment(request);
    },
  });
};
