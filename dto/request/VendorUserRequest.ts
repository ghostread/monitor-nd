import { PersonRequest } from './PersonRequest';
import { UserRequest } from './UserRequest';
import { PaymentRequest } from './PaymentRequest';

export class VendorUserRequest {
  user: UserRequest;
  person: PersonRequest;
  paymentMethod?: PaymentRequest;
}