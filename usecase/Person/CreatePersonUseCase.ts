import { PersonServiceI } from '../../service/person/PersonServiceI';
import { PersonRequest } from '../../dto/request/PersonRequest';
import { PersonResponse } from '../../dto/response/PersonResponse';
import { PersonServiceImp } from '../../service/person/PersonServiceImp';
import { Person } from '@pxp-nd/common';

export class CreatePersonUseCase {
  private readonly personService: PersonServiceI;

  constructor() {
    this.personService = new PersonServiceImp();
  }

  public async execute(personRequest: PersonRequest): Promise<PersonResponse> {
    const person: Person = await this.personService.addPerson(this.buildPerson(personRequest));
    return this.buildSavePersonResponse(person);
  }

  private buildPerson(personRequest: PersonRequest): Person {
    const person = new Person();
    person.name = personRequest.name;
    person.lastName = personRequest.lastName;
    person.lastName2 = personRequest.lastName;
    person.dni = personRequest.dni;
    person.dniNumber = personRequest.dniNumber;
    person.mail = personRequest.mail;
    person.address = personRequest.address;
    person.gender = personRequest.gender;
    person.birthday = personRequest.birthday;
    person.phone = personRequest.phone;
    person.cellphone = personRequest.cellphone;
    person.nationality = personRequest.nationality;
    return person;
  }

  private buildSavePersonResponse(person: Person): PersonResponse {
    return new PersonResponse(person);
  }
}