import { AxiosResponse } from 'axios';
import { $api } from '../http';

import { HomeItems } from '../models/home';

export default class HomeService {
  static async fetchHomeItems(): Promise<AxiosResponse<HomeItems>> {
    return $api.get<HomeItems>('/home');
  }
}
