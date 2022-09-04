import { IPaymentMethodService } from './IPaymentMethodService';
import { PaymentMethodRepository } from '../../repositories/PaymentMethodRepository';
import { PaymentMethod } from '../../entity/PaymentMethod';

export class PaymentMethodService implements IPaymentMethodService {

  private readonly paymentMethodRepository: PaymentMethodRepository;

  constructor() {
    this.paymentMethodRepository = new PaymentMethodRepository();
  }

  create(paymentMethod: PaymentMethod): Promise<PaymentMethod> {
    return this.paymentMethodRepository.save(paymentMethod);
  }

  getAllPaymentMethods(): Promise<PaymentMethod[]> {
    return this.paymentMethodRepository.find();
  }

  getPaymentMethod(id: number): Promise<PaymentMethod> {
    return this.paymentMethodRepository.findOneOrFail(id);
  }

}
