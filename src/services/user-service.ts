import { AxiosResponse } from 'axios';
import { $api, http } from '../http';

import { UserAuthResponse } from '../models/response/user-auth-response';
import { User } from '../models/user';

export default class UserService {
  static async signIn(email: string, password: string): Promise<AxiosResponse<UserAuthResponse>> {
    return $api.post<UserAuthResponse>('/auth/signin', { email, password });
  }

  static async signOut(): Promise<void> {
    return $api.post('/auth/signout');
  }

  static async getMe(): Promise<AxiosResponse<User>> {
    return $api.get<User>('/user/me');
  }

  static async checkAuth(): Promise<AxiosResponse<UserAuthResponse>> {
    return http.get('/auth/refresh');
  }
}
