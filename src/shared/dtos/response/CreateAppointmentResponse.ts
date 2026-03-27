export class CreateAppointmentResponse {
  readonly nmBarbershop: string;
  readonly nmBarber: string;
  readonly dtAppointment: Date;
  readonly hrStart: string;
  readonly hrEnd: string;
  readonly dsNotes?: string;
  readonly tpStatus: 'PENDING';

  constructor(data: CreateAppointmentResponse) {
    this.nmBarbershop = data.nmBarbershop;
    this.nmBarber = data.nmBarber;
    this.dtAppointment = data.dtAppointment;
    this.hrStart = data.hrStart;
    this.hrEnd = data.hrEnd;
    this.dsNotes = data.dsNotes;
    this.tpStatus = data.tpStatus;
  }
}
