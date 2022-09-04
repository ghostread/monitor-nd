import { CommonResponse } from './CommonResponse';
import { PaymentMethod } from '../../entity/PaymentMethod';
import { SUCCESS_CODE, SUCCESS_MSG } from '../../constants/ResponseConstants';

export class PaymentMethodResponse extends CommonResponse {
  paymentMethod: PaymentMethod;

  constructor(paymentMethod: PaymentMethod) {
    super(SUCCESS_CODE, SUCCESS_MSG);
    this.paymentMethod = paymentMethod;
  }
}
