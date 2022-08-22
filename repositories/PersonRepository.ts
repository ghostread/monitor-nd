import { Person } from '@pxp-nd/common';
import { BaseRepository } from './BaseRepository';
import { getConnectionManager } from 'typeorm';

export class PersonRepository extends BaseRepository<Person> {
  constructor() {
    super(Person, getConnectionManager().get('default'));
  }
}