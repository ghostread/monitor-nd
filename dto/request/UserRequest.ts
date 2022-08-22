import Person from '@pxp-nd/common/dist/entities/Person';
import Role from '@pxp-nd/common/dist/entities/Role';

export class UserRequest{
  username: string;
  password?: string;
  style?: string;
  expiration?: Date;
  authenticationType?: string;
  authenticationId?: string;
  hash?: string;
  salt?: string;
  personId: number;
  roleId: number;
}