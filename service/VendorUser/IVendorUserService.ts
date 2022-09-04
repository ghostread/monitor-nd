import { VendorUser } from '../../entity/VendorUser';
import { DeleteResult } from 'typeorm';

export interface IVendorUserService {
  createVendor(vendorUser: VendorUser): Promise<VendorUser>;

  getAllVendors(): Promise<VendorUser[]>;

  getVendor(id: number): Promise<VendorUser>;

  deleteVendor(id: number): Promise<DeleteResult>;
}
