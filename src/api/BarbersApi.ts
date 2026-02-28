import { mockBarbershopDetails, mockBarbershopList } from '../mocks/Barbers';

export class BarbersApi {
  static async getListBarbershops() {
    return mockBarbershopList();
  }

  static async getBarbershopDetails(id: number) {
    return mockBarbershopDetails(id);
  }
}
