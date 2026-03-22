export class BarbershopListResponse {
  id: number;
  nmBarbershop: string;
  dsAddress: string;
  inOpen: boolean;
  hrClosesAt: string;
  dtNextAvailableSchedule: Date;

  constructor(data: BarbershopListResponse) {
    this.id = data.id;
    this.nmBarbershop = data.nmBarbershop;
    this.dsAddress = data.dsAddress;
    this.inOpen = data.inOpen;
    this.hrClosesAt = data.hrClosesAt;
    this.dtNextAvailableSchedule = new Date(data.dtNextAvailableSchedule);
  }
}
