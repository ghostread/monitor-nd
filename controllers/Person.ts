import { Authentication, Controller, DbSettings, Log, Post, ReadOnly, Route } from '@pxp-nd/core';
import { PersonRequest } from '../dto/request/PersonRequest';
import { CreatePersonUseCase } from '../usecase/Person/CreatePersonUseCase';
import { PersonResponse } from '../dto/response/PersonResponse';

@Route('/person')
export default class Person extends Controller {

  private readonly createPersonUseCase = new CreatePersonUseCase();


  @Post()
  @DbSettings('Orm')
  @ReadOnly(false)
  @Authentication(false)
  @Log(true)
  
  addPerson(personRequest: PersonRequest): Promise<PersonResponse> {
    return this.createPersonUseCase.execute(personRequest);
  }
}
