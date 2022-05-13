import { AxiosResponse } from 'axios';
import { $api } from '../http';

import { FetchAuthorsResponse } from '../models/response/authors-response';
import { UserWithLatestMedia } from '../models/user/user-with-latest-media';

export default class AuthorsService {
  static async fetchAuthors(
    page = 0,
    limit = 10,
    search = '',
  ): Promise<AxiosResponse<FetchAuthorsResponse>> {
    return $api.get<FetchAuthorsResponse>(`user?search=${search}&limit=${limit}&page=${page}`);
  }

  static async getAuthor(authorId: string): Promise<AxiosResponse<UserWithLatestMedia>> {
    return $api.get<UserWithLatestMedia>(`user/${authorId}`);
  }
}
