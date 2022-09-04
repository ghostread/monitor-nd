import { Person } from '@pxp-nd/common';
import { DeleteResult } from 'typeorm';

export interface IPersonService {
  addPerson(person: Person): Promise<Person>;

  updatePerson(person: Person, id: number): Promise<Person>;

  getPerson(id: number): Promise<Person>;

  getAllPersons(): Promise<Person[]>;

  deletePerson(id: number): Promise<DeleteResult>;
}
