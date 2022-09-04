import { PersonRequest } from './PersonRequest';
import { UserRequest } from './UserRequest';
import { PaymentMethodRequest } from './PaymentMethodRequest';

export class VendorUserRequest {
  user: UserRequest;
  person: PersonRequest;
  // paymentMethod?: PaymentMethodRequest;
}
