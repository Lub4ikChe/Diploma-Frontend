import { UserInformation } from './information';

export interface User {
  id: string;
  email: string;
  status: UserStatuses;
  information: UserInformation;
}

export enum UserStatuses {
  ACTIVE = 'active',
  PENDING = 'pending_activation',
}
