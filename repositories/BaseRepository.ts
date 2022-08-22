import 'reflect-metadata';
import { Repository, Connection, ObjectType } from 'typeorm';

export class BaseRepository<T> extends Repository<T> {
  private readonly connection: Connection;
  private readonly entity: ObjectType<T>;

  constructor(entity: ObjectType<T>, connection: Connection) {
    super();
    this.entity = entity;
    this.connection = connection;
    Object.assign(this, {
      manager: connection.manager,
      metadata: connection.getMetadata(entity),
      queryRunner: connection.manager.queryRunner,
    });
  }
}