import { Authentication, Controller, DbSettings, Log, Post, ReadOnly, Route } from '@pxp-nd/core';
import { PersonRequest } from '../dto/request/PersonRequest';
import { CreatePersonUseCase } from '../usecase/Person/CreatePersonUseCase';
import { PersonResponse } from '../dto/response/PersonResponse';
import { UserService } from '../service/User/UserService';

@Route('/users')
export default class User extends Controller {

  // private readonly  userService= new UserService();


  // @Post()
  // @DbSettings('Orm')
  // @ReadOnly(false)
  // @Authentication(false)
  // @Log(true)

  // addUser(user: any): Promise<any> {
  //   return this.userService.createUser(user);
  // }
}
