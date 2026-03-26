import type { Barber } from '@/shared/dtos/response/BarbershopDetailsResponse';

export type BarberSectionProps = {
  barbers: Barber[];
  handleBarberSelect: (barber: Barber) => void;
};
