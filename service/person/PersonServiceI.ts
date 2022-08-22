import { Person } from '@pxp-nd/common';

export interface PersonServiceI {
  addPerson(person: Person): Promise<Person>;
}
