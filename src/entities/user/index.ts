import { UserInformation } from './information';

export interface User {
  id: string;
  email: string;
  status: string;
  name: string;
  information: UserInformation;
}
