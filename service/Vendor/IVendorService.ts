import { Vendor } from '../../entity/Vendor';

export interface IVendorService {
  create(vendor: Vendor): Promise<Vendor>;

  getVendor(id: number): Promise<Vendor>;
}
