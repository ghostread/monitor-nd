import { IUserService } from './IUserService';
import { User } from '@pxp-nd/common';
import { UserRepository } from '../../repositories/UserRepository';

export class UserService implements IUserService {
  private readonly userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  createUser(user: User): Promise<any> {
    return this.userRepository.save(user);
  }

  getUser(id: number): Promise<User> {
    return this.userRepository.findOneOrFail(id);
  }
}
