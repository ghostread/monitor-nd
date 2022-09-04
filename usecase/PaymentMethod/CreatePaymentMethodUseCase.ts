import { IPaymentMethodService } from '../../service/PaymentMethod/IPaymentMethodService';
import { PaymentMethodService } from '../../service/PaymentMethod/PaymentMethodService';
import { PaymentMethodRequest } from '../../dto/request/PaymentMethodRequest';
import { PaymentMethod } from '../../entity/PaymentMethod';
import { Vendor } from '../../entity/Vendor';
import { IVendorService } from '../../service/Vendor/IVendorService';
import { VendorService } from '../../service/Vendor/VendorService';
import { PaymentMethodResponse } from '../../dto/response/PaymentMethodResponse';

export class CreatePaymentMethodUseCase {
  private readonly paymentMethodService: IPaymentMethodService;
  private readonly vendorService: IVendorService;

  constructor() {
    this.paymentMethodService = new PaymentMethodService();
    this.vendorService = new VendorService();
  }

  public async execute(userId: number, paymentMethodRequest: PaymentMethodRequest) {
    const vendor: Vendor = await this.vendorService.getVendor(userId);
    return this.buildPaymentMethodResponse(this.buildPaymentMethod(paymentMethodRequest, vendor));
  }

  private buildPaymentMethod(paymentMethodRequest: PaymentMethodRequest, vendor: Vendor): PaymentMethod {
    const paymentMethod = new PaymentMethod();
    paymentMethod.creditCard = paymentMethodRequest.creditCard;
    paymentMethod.expirationDate = paymentMethodRequest.expirationDate;
    paymentMethod.vendor = vendor;
    return paymentMethod;
  }

  private buildPaymentMethodResponse(paymentMethod: PaymentMethod): PaymentMethodResponse {
    return new PaymentMethodResponse(paymentMethod);
  }
}
