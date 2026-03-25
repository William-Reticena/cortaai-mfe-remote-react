export class BarbershopListResponse {
  readonly id: number;
  readonly nmBarbershop: string;
  readonly dsAddress: string;
  readonly inOpen: boolean;
  readonly hrClosesAt: string;
  readonly dtNextAvailableSchedule: Date;

  constructor(data: BarbershopListResponse) {
    this.id = data.id;
    this.nmBarbershop = data.nmBarbershop;
    this.dsAddress = data.dsAddress;
    this.inOpen = data.inOpen;
    this.hrClosesAt = data.hrClosesAt;
    this.dtNextAvailableSchedule = new Date(data.dtNextAvailableSchedule);
  }
}
