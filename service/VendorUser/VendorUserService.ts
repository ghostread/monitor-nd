import { UserRepository } from '../../repositories/UserRepository';
import { User } from '@pxp-nd/common';


export class VendorUserService {
  private readonly userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  createVendor(vendorUser: User): Promise<User> {
    return this.userRepository.save(vendorUser);
  }

}