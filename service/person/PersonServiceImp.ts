import { Person } from '@pxp-nd/common';
import { PersonServiceI } from './PersonServiceI';
import { PersonRepository } from '../../repositories/PersonRepository';

export class PersonServiceImp implements PersonServiceI {
  private personRepository = new PersonRepository();

  addPerson(person: Person): Promise<Person> {
    return this.personRepository.save(person);
  }


}