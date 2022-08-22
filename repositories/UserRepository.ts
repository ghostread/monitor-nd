import { BaseRepository } from './BaseRepository';
import { getConnectionManager } from 'typeorm';
import { User } from '../entity/User';

export class UserRepository extends BaseRepository<User> {
  constructor() {
    super(User, getConnectionManager().get('default'));
  }
}