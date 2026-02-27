export const mockBarbershopList = async (): Promise<any[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          name: 'Barbershop A',
          neighborhood: 'Downtown',
          city: 'City X',
          isOpen: true,
          closesAt: '18:00',
          nextAvailableSlot: '2024-06-15T14:00:00Z',
        },
        {
          id: 2,
          name: 'Barbershop B',
          neighborhood: 'Uptown',
          city: 'City Y',
          isOpen: false,
          closesAt: '17:00',
          nextAvailableSlot: '2024-06-16T10:00:00Z',
        },
        {
          id: 3,
          name: 'Barbershop C',
          neighborhood: 'Midtown',
          city: 'City Z',
          isOpen: true,
          closesAt: '19:00',
          nextAvailableSlot: '2024-06-15T16:00:00Z',
        },
      ]);
    }, 1000);
  });
};
