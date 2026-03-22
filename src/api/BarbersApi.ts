import api from './client';
import { BarbershopListResponse } from '../shared/dtos/request/BarbershopListResponse';
import { BarbershopDetailsResponse } from '../shared/dtos/request/BarbershopDetailsResponse';

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
