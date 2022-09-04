import { PaymentMethod } from '../../entity/PaymentMethod';

export interface IPaymentMethodService {
  create(paymentMethod: PaymentMethod): Promise<PaymentMethod>;

  getPaymentMethod(id: number): Promise<PaymentMethod>;

  getAllPaymentMethods():Promise<PaymentMethod[]>
}
