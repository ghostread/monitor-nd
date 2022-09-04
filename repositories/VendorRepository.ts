import { BaseRepository } from './BaseRepository';
import { getConnectionManager } from 'typeorm';
import { Vendor } from '../entity/Vendor';

export class VendorRepository extends BaseRepository<Vendor> {
  constructor() {
    super(Vendor, getConnectionManager().get('default'));
  }
}
