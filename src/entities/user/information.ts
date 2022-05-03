import { Attachment } from '../attachment';

export interface UserInformation {
  id: string;
  firstName: string;
  lastName: string;
  name: string;
  photo?: Attachment;
}
