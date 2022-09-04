import { Person } from '@pxp-nd/common';
import { IPersonService } from './IPersonService';
import { PersonRepository } from '../../repositories/PersonRepository';
import { DeleteResult } from 'typeorm';

export class PersonServiceImp implements IPersonService {
  private personRepository = new PersonRepository();

  addPerson(person: Person): Promise<Person> {
    return this.personRepository.save(person);
  }

  deletePerson(id: number): Promise<DeleteResult> {
    return this.personRepository.delete(id);
  }

  getAllPersons(): Promise<Person[]> {
    return this.personRepository.find();
  }

  getPerson(id: number): Promise<Person> {
    return this.personRepository.findOneOrFail(id);
  }

  async updatePerson(person: Person, id: number): Promise<Person> {
    await this.personRepository.update(id, person);
    return this.getPerson(id);
  }
}
