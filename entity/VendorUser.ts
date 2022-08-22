import { User } from '@pxp-nd/common';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  BaseEntity,
  ManyToOne,
  JoinColumn
} from 'typeorm';
import {Vendor} from './Vendor';

@Entity({ schema: 'mon', name: 'vendor_user' })
export class VendorUser {
  @PrimaryGeneratedColumn({ name: 'vendor_user_id' })
  vendorId: number;

  @Column({
    name: 'user',
    type: 'varchar',
    length: 50,
    nullable: true
  })
  user: string;

  @Column({
    name: 'email',
    type: 'varchar',
    length: 50,
    nullable: true
  })
  email: string;

  @Column({
    name: 'password',
    type: 'varchar',
    length: 50,
    nullable: true
  }) 
  password: string;

  @Column({
    name: 'rol',
    type: 'varchar',
    length: 10,
    nullable: true
  })
  rol: string;

  @ManyToOne((type) => User, (user) => user.userId)
  @JoinColumn({ name: 'tsec_user_id' })
  userpxp: User;

  @ManyToOne((type) => Vendor, (vendor) => vendor.vendorId)
  @JoinColumn({ name: 'vendor_id' })
  vendor: Vendor;
}
