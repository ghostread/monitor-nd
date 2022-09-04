import { User } from '@pxp-nd/common';
import { BaseRepository } from './BaseRepository';
import { getConnectionManager } from 'typeorm';

export class UserRepository extends BaseRepository<User> {
  constructor() {
    super(User, getConnectionManager().get('default'));
  }
}
