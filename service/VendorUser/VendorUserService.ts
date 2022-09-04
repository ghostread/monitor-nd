import { UserRepository } from '../../repositories/UserRepository';
import { User } from '@pxp-nd/common';
import { IVendorUserService } from './IVendorUserService';
import { DeleteResult } from 'typeorm';


export class VendorUserService{

  private readonly userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  // createVendor(vendorUser: User): Promise<User> {
  //   return this.userRepository.save(vendorUser);
  // }
  //
  // deleteVendor(id: number): Promise<DeleteResult> {
  //   return Promise.resolve(undefined);
  // }
  //
  // getAllVendors(): Promise<VendorUser[]> {
  //   return Promise.resolve([]);
  // }
  //
  // getVendor(id: number): Promise<VendorUser> {
  //   return Promise.resolve(undefined);
  // }

}
