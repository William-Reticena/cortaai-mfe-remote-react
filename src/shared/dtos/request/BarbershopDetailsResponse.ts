export class BarbershopDetailsResponse {
  barbershopDetails: BarbershopDetails;
  offerServices: OfferService[];
  barbers: Barber[];

  constructor(data: BarbershopDetailsResponse) {
    this.barbershopDetails = new BarbershopDetails(data.barbershopDetails);
    this.offerServices = data.offerServices.map((service) => new OfferService(service));
    this.barbers = data.barbers.map((barber) => new Barber(barber));
  }
}

class BarbershopDetails {
  nmBarbershop: string;
  dsAddress: string;
  dsPhone: string;
  inOpen: boolean;
  hrClosesAt: string;
  dtNextAvailableSchedule: Date;

  constructor(data: BarbershopDetails) {
    this.nmBarbershop = data.nmBarbershop;
    this.dsAddress = data.dsAddress;
    this.dsPhone = data.dsPhone;
    this.inOpen = data.inOpen;
    this.hrClosesAt = data.hrClosesAt;
    this.dtNextAvailableSchedule = new Date(data.dtNextAvailableSchedule);
  }
}

class OfferService {
  id: number;
  nmService: string;
  dsService: string;
  vlPrice: number;
  nrDurationMinutes: number;

  constructor(data: OfferService) {
    this.id = data.id;
    this.nmService = data.nmService;
    this.dsService = data.dsService;
    this.vlPrice = data.vlPrice;
    this.nrDurationMinutes = data.nrDurationMinutes;
  }
}

class Barber {
  id: number;
  nmEmployee: string;
  specialties: string[];

  constructor(data: Barber) {
    this.id = data.id;
    this.nmEmployee = data.nmEmployee;
    this.specialties = data.specialties;
  }
}
