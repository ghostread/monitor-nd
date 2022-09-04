import { BaseRepository } from './BaseRepository';
import { getConnectionManager } from 'typeorm';
import { PaymentMethod } from '../entity/PaymentMethod';

export class PaymentMethodRepository extends BaseRepository<PaymentMethod> {
  constructor() {
    super(PaymentMethod, getConnectionManager().get('default'));
  }
}
