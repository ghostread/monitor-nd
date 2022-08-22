import { VendorUser } from '../../entity/VendorUser';

export interface IVendorUserService {
  createVendor(vendorUser: VendorUser): Promise<VendorUser>;
}