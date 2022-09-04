import Person from '@pxp-nd/common/dist/entities/Person';
import Role from '@pxp-nd/common/dist/entities/Role';

export class UserRequest{
  userName: string;
  password?: string;
  style?: string;
  expiration?: Date;
  authenticationType?: string;
  authenticationId?: string;
}
