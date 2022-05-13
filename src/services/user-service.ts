import { AxiosResponse } from 'axios';
import { $api, http } from '../http';

import { UserAuthResponse } from '../models/response/user-auth-response';
import { UserInformation } from '../models/user/information';
import { UserWithMedia } from '../models/user/user-with-media';
import { Attachment } from '../models/attachment';

export default class UserService {
  static async signIn(email: string, password: string): Promise<AxiosResponse<UserAuthResponse>> {
    return $api.post<UserAuthResponse>('/auth/signin', { email, password });
  }

  static async signOut(): Promise<void> {
    return $api.post('/auth/signout');
  }

  static async getMe(): Promise<AxiosResponse<UserWithMedia>> {
    return $api.get<UserWithMedia>('/user/me');
  }

  static async checkAuth(): Promise<AxiosResponse<UserAuthResponse>> {
    return http.get<UserAuthResponse>('/auth/refresh');
  }

  static async changePassword(currentPassword: string, newPassword: string): Promise<void> {
    return $api.put('/password', {
      currentPassword,
      password: newPassword,
    });
  }

  static async updateUserInfo(
    firstName: string,
    lastName: string,
  ): Promise<AxiosResponse<UserInformation>> {
    return $api.put<UserInformation>('/user/information', {
      firstName,
      lastName,
    });
  }

  static async updateUserPhoto(photoFile: File): Promise<AxiosResponse<Attachment>> {
    const formData = new FormData();
    formData.append('photo', photoFile);
    return $api.put<Attachment>('/user/photo', formData);
  }

  static async deleteUserPhoto(): Promise<AxiosResponse<Attachment>> {
    return $api.delete<Attachment>('/user/photo');
  }
}
