import { IUserService } from './IUserService';
import { User } from '@pxp-nd/common';
import { UserRepository } from '@pxp-nd/repositories';

export class UserService implements IUserService {
  private readonly userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  createUser(user: User): Promise<User> {
    return this.userRepository.save(user);
  }

}