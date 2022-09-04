import { Controller, DbSettings, Delete, Get, Patch, Post, ReadOnly, Route } from '@pxp-nd/core';
import { getManager } from 'typeorm';
import { PaymentMethod as PaymentMethodModel } from '../entity/PaymentMethod';
import { CreatePaymentMethodUseCase } from '../usecase/PaymentMethod/CreatePaymentMethodUseCase';
import { PaymentMethodResponse } from '../dto/response/PaymentMethodResponse';

@Route('/paymentmethod')
export default class PaymentMethod extends Controller {

  private readonly createPaymentMethodUseCase = new CreatePaymentMethodUseCase();

  @Get('', { readOnly: true, dbSettings: 'Orm', authentication: false })
  async find(params: Record<string, unknown>): Promise<PaymentMethodModel[]> {
    const paymentMethod = await getManager().find(PaymentMethodModel);
    return paymentMethod;
  }

  @Post('/save/:userId', { readOnly: true, dbSettings: 'Orm', authentication: false })
  save(params: any): Promise<PaymentMethodResponse> {
    return this.createPaymentMethodUseCase.execute(params.userId, params);
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
