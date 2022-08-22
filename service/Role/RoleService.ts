import { Role } from '@pxp-nd/common';
import { IRoleService } from './IRoleService';
import { RolRepository } from '../../repositories/RolRepository';

export class RoleService implements IRoleService {
  private readonly roleRepository: RolRepository;

  constructor() {
    this.roleRepository = new RolRepository();
  }

  findRoleById(id: number): Promise<Role> {
    return this.roleRepository.findOneOrFail(id);
  }

  createRole(role: Role): Promise<Role> {
    return this.roleRepository.save(role);
  }

  findRoleByRole(role: string): Promise<Role> {
    return this.roleRepository.findOneOrFail({ role });
  }

}