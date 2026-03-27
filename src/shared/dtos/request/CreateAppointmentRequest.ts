export class CreateAppointmentRequest {
  readonly idBarber: number;
  readonly idService: number;
  readonly dtAppointment: Date;
  readonly dsNotes?: string;

  constructor(data: CreateAppointmentRequest) {
    this.idBarber = data.idBarber;
    this.idService = data.idService;
    this.dtAppointment = data.dtAppointment;
    this.dsNotes = data.dsNotes;
  }
}
