import { IVendorService } from './IVendorService';
import { VendorRepository } from '../../repositories/VendorRepository';
import { Vendor } from '../../entity/Vendor';

export class VendorService implements IVendorService {
  private readonly vendorRepository: VendorRepository;

  constructor() {
    this.vendorRepository = new VendorRepository();
  }

  create(vendor: Vendor): Promise<Vendor> {
    return this.vendorRepository.save(vendor);
  }

  getVendor(id: number): Promise<Vendor> {
    return this.vendorRepository.findOneOrFail(id);
  }

}
