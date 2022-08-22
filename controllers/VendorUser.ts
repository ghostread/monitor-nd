import { Person, Role, User } from '@pxp-nd/common';
import { Authentication, Controller, DbSettings, Delete, Get, Patch, Post, ReadOnly, Route } from '@pxp-nd/core';
import { getManager } from 'typeorm';
import { VendorUser as VendorUserModel } from '../entity/VendorUser';
import { VendorUserRequest } from '../dto/request/VendorUserRequest';
import { CreatePersonUseCase } from '../usecase/Person/CreatePersonUseCase';
import { CreateUserVendorUseCase } from '../usecase/UserVendor/CreateUserVendor';

// @Model('vendor/Vendor')
@Route('/vendors/user')
export default class VendorUser extends Controller {
  private readonly createUserVendorUseCase = new CreateUserVendorUseCase();


  @Get()
  @DbSettings('Orm')
  @ReadOnly(true)
  @Authentication(false)
  async find(params: Record<string, unknown>): Promise<VendorUserModel[]> {
    const vendors = await getManager().find(VendorUserModel);
    return vendors;
  }

  @Post()
  @ReadOnly(true)
  @DbSettings('Orm')
  @Authentication(false)
  async addUserVendor(vendorUserRequest: VendorUserRequest): Promise<User>{
    return this.createUserVendorUseCase.execute(vendorUserRequest);
  }

  @Post()
  @ReadOnly(true)
  @DbSettings('Orm')
  @Authentication(false)
  async save(params: any): Promise<VendorUserModel> {
    const vendor = await getManager().save(VendorUserModel, {
      ...params
    });
    return vendor;
  }

  @Patch('/edit/:id')
  @ReadOnly(true)
  @DbSettings('Orm')
  async edit(params: any): Promise<any> {
    const id = params.id;
    delete params.id;
    await getManager().update(VendorUserModel, id, {
      ...params
    });

    const vendor = await getManager().findOne(VendorUserModel, {
      where: { customerId: id }
    });
    return vendor;
  }

  @Delete('/delete/:id')
  @ReadOnly(true)
  @DbSettings('Orm')
  async delete(params: any): Promise<any> {
    const vendor = await getManager().delete(VendorUserModel, {
      customerId: params.id
    });
    return vendor;
  }
}
