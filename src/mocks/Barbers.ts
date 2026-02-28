const mockBarbershop = [
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
];

const mockBarbershopDetails1 = [
  {
    id: 1,
    name: 'Barbershop A',
    neighborhood: 'Downtown',
    city: 'City X',
    isOpen: true,
    closesAt: '18:00',
    nextAvailableSlot: '2024-06-15T14:00:00Z',
    address: 'Av. Central, 123 - Downtown',
    phone: '+55 11 99999-9999',
  },
];

const mockBarbers = [
  {
    id: 101,
    barbershopId: 1,
    name: 'Diego Santos',
    avatarUrl: 'https://placehold.co/128x128?text=Diego',
    rating: 4.9,
    isAvailable: true,
    services: [
      { id: 1, name: 'Corte masculino', durationMinutes: 45, price: 50 },
      { id: 2, name: 'Barba', durationMinutes: 30, price: 35 },
      { id: 3, name: 'Corte + Barba', durationMinutes: 75, price: 80 },
    ],
  },
  {
    id: 102,
    barbershopId: 1,
    name: 'Bruno Almeida',
    avatarUrl: 'https://placehold.co/128x128?text=Bruno',
    rating: 4.7,
    isAvailable: false,
    services: [
      { id: 1, name: 'Corte masculino', durationMinutes: 45, price: 55 },
      { id: 4, name: 'Acabamento', durationMinutes: 15, price: 20 },
    ],
  },
  {
    id: 103,
    barbershopId: 1,
    name: 'Carlos Pereira',
    avatarUrl: 'https://placehold.co/128x128?text=Carlos',
    rating: 4.8,
    isAvailable: true,
    services: [
      { id: 1, name: 'Corte masculino', durationMinutes: 45, price: 60 },
      { id: 5, name: 'Corte infantil', durationMinutes: 30, price: 30 },
    ],
  },
];

const mockSlots = [
  { barberId: 101, startAt: '2024-06-15T14:00:00Z', endAt: '2024-06-15T14:45:00Z', isAvailable: true },
  { barberId: 101, startAt: '2024-06-15T15:00:00Z', endAt: '2024-06-15T15:45:00Z', isAvailable: true },
  { barberId: 101, startAt: '2024-06-15T16:00:00Z', endAt: '2024-06-15T16:45:00Z', isAvailable: false },
  { barberId: 102, startAt: '2024-06-16T10:00:00Z', endAt: '2024-06-16T10:45:00Z', isAvailable: true },
];

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const mockBarbershopList = async (): Promise<any[]> => {
  await sleep(1000);
  return mockBarbershop;
};

export const mockBarbershopDetails = async (id: number): Promise<any> => {
  await sleep(1000);
  const barbershopDetails = mockBarbershopDetails1.find((b) => b.id === id);
  if (!barbershopDetails) throw new Error('Barbershop not found');

  const barbers = mockBarbers.filter((b) => b.barbershopId === id);

  const allServices = barbers
    .map((barber) => barber.services)
    .reduce((acc, services) => {
      services.forEach((service) => {
        if (!acc.some((s) => s.id === service.id)) {
          acc.push(service);
        }
      });
      return acc;
    }, [] as any[]);

  return { ...barbershopDetails, services: allServices, barbers };
};
