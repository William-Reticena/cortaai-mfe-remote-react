import api from './client';
import { mockBarbershopDetails } from '../mocks/Barbers';
import { BarbershopListResponse } from '../shared/dtos/request/BarbershopListResponse';

export class BarbersApi {
  static async getListBarbershops() {
    const response = await api.get<BarbershopListResponse[]>('/barbershops');

    return response.data.map((item) => new BarbershopListResponse(item));
  }

  static async getBarbershopDetails(id: number) {
    return mockBarbershopDetails(id);
  }
}
