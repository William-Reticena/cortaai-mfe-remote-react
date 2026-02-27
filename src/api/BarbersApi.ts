import { mockBarbershopList } from '../mocks/Barbers';

export class BarbersApi {
  static async getListBarbershops() {
    return mockBarbershopList();
  }
}
