import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  BaseEntity
} from 'typeorm';

@Entity({ schema: 'mon', name: 'vendor' })
export class Vendor {
  @PrimaryGeneratedColumn({ name: 'vendor_id' })
  vendorId: number;

  @Column({
    name: 'name',
    type: 'varchar',
    length: 50,
    nullable: true
  })
  name: string;

  @Column({
    name: 'last_name',
    type: 'varchar',
    length: 50,
    nullable: true
  })
  lastName: string;

  @Column({
    name: 'email',
    type: 'varchar',
    length: 20,
    nullable: true
  })
  email: string;

  @Column({
    name: 'mobile_number',
    type: 'varchar',
    length: 10,
    nullable: true
  })
  mobileNumber: string;

  @Column({ type: 'varchar', length: 30, nullable: true })
  vendorState: string;

  @Column({
    name: 'address',
    type: 'varchar',
    length: 50,
    nullable: true
  })
  address: number;

  @Column({
    name: 'city',
    type: 'varchar',
    length: 20,
    nullable: true
  })
  city: string;

  @Column({
    name: 'postal_code',
    type: 'varchar',
    length: 3,
    nullable: true
  })
  postalCode: string;

  @Column({
    name: 'active',
    type: 'varchar',
    length: 1,
    nullable: true
  })
  active: string;

  @Column({
    name: 'time_zone',
    type: 'varchar',
    length: 50,
    nullable: true
  })
  timeZone: string;
}
