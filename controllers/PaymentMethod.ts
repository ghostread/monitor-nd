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
import { PaymentMethod as PaymentMethodModel } from '../entity/PaymentMethod';
@Route('/paymentmethod')
export default class PaymentMethod extends Controller {
  @Get()
  @DbSettings('Orm')
  @ReadOnly(true)
  @Authentication(false)
  async find(params: Record<string, unknown>): Promise<PaymentMethodModel[]> {
    const paymentMethod = await getManager().find(PaymentMethodModel);
    return paymentMethod;
  }

  @Post()
  @ReadOnly(true)
  @DbSettings('Orm')
  @Authentication(false)
  async save(params: any): Promise<PaymentMethodModel> {
    console.log(params);

    const paymentMethod = await getManager().save(PaymentMethodModel, {
      ...params
    });
    return paymentMethod;
  }

  @Patch('/edit/:id')
  @ReadOnly(true)
  @DbSettings('Orm')
  async edit(params: any): Promise<any> {
    const id = params.id;
    delete params.id;
    await getManager().update(PaymentMethodModel, id, {
      ...params
    });

    const paymentMethod = await getManager().findOne(PaymentMethodModel, {
      where: { customerId: id }
    });
    return paymentMethod;
  }

  @Delete('/delete/:id')
  @ReadOnly(true)
  @DbSettings('Orm')
  async delete(params: any): Promise<any> {
    const paymentMethod = await getManager().delete(PaymentMethodModel, {
      customerId: params.id
    });
    return paymentMethod;
  }
}
