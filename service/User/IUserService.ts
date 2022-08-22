import { User } from '@pxp-nd/common';

export interface IUserService {
  createUser(user: User): Promise<User>;
}