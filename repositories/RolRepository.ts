import { BaseRepository } from './BaseRepository';
import { getConnectionManager } from 'typeorm';
import { Role } from '@pxp-nd/common';

export class RolRepository extends BaseRepository<Role> {
  constructor() {
    super(Role, getConnectionManager().get('default'));
  }
}