import { User } from '@pxp-nd/common';

export interface IUserService {
  createUser(user: User): Promise<User>;

  getUser(id: number): Promise<User>;
}
