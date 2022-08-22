import { Role } from '@pxp-nd/common';

export interface IRoleService {
  createRole(role: Role): Promise<Role>;

  findRoleById(id: number): Promise<Role>;

  findRoleByRole(role: string): Promise<Role>;
}