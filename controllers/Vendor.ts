import {
  Authentication,
  Controller,
  DbSettings,
  Delete,
  Get,
  Patch,
  Post,
  ReadOnly,
  Route
} from '@pxp-nd/core';
import { getManager } from 'typeorm';
import { Vendor as VendorModel } from '../entity/Vendor';

@Route('/vendors')
export default class Vendor extends Controller {
  @Get()
  @DbSettings('Orm')
  @ReadOnly(true)
  @Authentication(false)
  async find(params: Record<string, unknown>): Promise<VendorModel[]> {
    const vendors = await getManager().find(VendorModel);
    return vendors;
  }

  @Post()
  @ReadOnly(true)
  @DbSettings('Orm')
  @Authentication(false)
  async save(params: any): Promise<VendorModel> {
    const vendor = await getManager().save(VendorModel, {
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
    await getManager().update(VendorModel, id, {
      ...params
    });

    const vendor = await getManager().findOne(VendorModel, {
      where: { customerId: id }
    });
    return vendor;
  }

  @Delete('/delete/:id')
  @ReadOnly(true)
  @DbSettings('Orm')
  async delete(params: any): Promise<any> {
    const vendor = await getManager().delete(VendorModel, {
      customerId: params.id
    });
    return vendor;
  }
}
