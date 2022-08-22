import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  BaseEntity,
  ManyToOne,
  JoinColumn
} from 'typeorm';
import  {Vendor}  from './Vendor';

@Entity({ schema: 'mon', name: 'payment_method' })
export class PaymentMethod {
  @PrimaryGeneratedColumn({ name: 'payment_method_id' })
  paymentMethodId: number;

  @Column({
    name: 'vendor_id', 
    nullable: true
  })
  vendorId: number;

  @Column({
    name: 'token',
    type: 'varchar',
    length: 100,
    nullable: true
  })
  token: string;

  @Column({
    name: 'active',
    type: 'varchar',
    length: 1,
    nullable: true
  })
  active: string;

  @Column({
    name: 'expiration_date',
    type: 'varchar',
    length: 20,
    nullable: true
  })
  expirationDate: string;

  @Column({
    name: 'credit_card',
    type: 'varchar',
    length: 20,
    nullable: true
  })
  creditCard: string;

  @ManyToOne(() => Vendor, (vendor) => vendor.vendorId)
  @JoinColumn({ name: 'vendor_id'})
  vendor: Vendor;
}
