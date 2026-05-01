import { BarbershopDetailsResponse, BarbershopListResponse, CreateAppointmentResponse } from '@/shared/dtos/response';
import type { CreateAppointmentRequest } from '@/shared/dtos/request';
import api from './client';

export class BarbersApi {
  static async getListBarbershops() {
    const response = await api.get<BarbershopListResponse[]>('/v1/barbershops');

    return response.data.map((item) => new BarbershopListResponse(item));
  }

  static async getBarbershopDetails(id: number) {
    const response = await api.get<BarbershopDetailsResponse>(`/v1/barbershops/${id}`);

    return new BarbershopDetailsResponse(response.data);
  }

  static async scheduleAppointment(request: CreateAppointmentRequest) {
    const response = await api.post<CreateAppointmentResponse>('/v1/appointments', request);

    return new CreateAppointmentResponse(response.data);
  }
}
