import { BarbershopDetailsResponse, BarbershopListResponse } from '@/shared/dtos/response';
import api from './client';

export class BarbersApi {
  static async getListBarbershops() {
    const response = await api.get<BarbershopListResponse[]>('/barbershops');

    return response.data.map((item) => new BarbershopListResponse(item));
  }

  static async getBarbershopDetails(id: number) {
    const response = await api.get<BarbershopDetailsResponse>(`/barbershops/${id}`);

    return new BarbershopDetailsResponse(response.data);
  }
}
