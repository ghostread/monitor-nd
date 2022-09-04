import { IPersonService } from '../../service/person/IPersonService';
import { PersonRequest } from '../../dto/request/PersonRequest';
import { PersonResponse } from '../../dto/response/PersonResponse';
import { PersonServiceImp } from '../../service/person/PersonServiceImp';
import { Person, Role, User } from '@pxp-nd/common';
import { IUserService } from '../../service/User/IUserService';
import { UserService } from '../../service/User/UserService';
import { RoleService } from '../../service/Role/RoleService';
import { IRoleService } from '../../service/Role/IRoleService';
import { genPassword } from '@pxp-nd/auth';
import { VendorUserRequest } from '../../dto/request/VendorUserRequest';
import { UserRequest } from '../../dto/request/UserRequest';

export class CreateUserVendorUseCase {
  private readonly personService: IPersonService;
  private readonly userService: IUserService;
  private readonly roleService: IRoleService;

  constructor() {
    this.personService = new PersonServiceImp();
    this.userService = new UserService();
    this.roleService = new RoleService();
  }

  public async execute(vendorUserRequest: VendorUserRequest): Promise<User> {
    const role = await this.roleService.findRoleByRole('vendor');
    const person = this.buildPerson(vendorUserRequest.person);
    return this.userService.createUser(this.buildUser(vendorUserRequest.user, person, role));
  }

  private buildPerson(personRequest: PersonRequest): Person {
    const person = new Person();
    person.name = personRequest.name;
    person.lastName = personRequest.lastName;
    person.lastName2 = personRequest.lastName;
    person.dni = personRequest.dni;
    person.dniNumber = personRequest.dniNumber;
    person.mail = personRequest.mail;
    person.address = personRequest.address;
    person.gender = personRequest.gender;
    person.birthday = personRequest.birthday;
    person.phone = personRequest.phone;
    person.cellphone = personRequest.cellphone;
    person.nationality = personRequest.nationality;
    return person;
  }

  private buildUser(userRequest: UserRequest, person: Person, role: Role): User {
    const hashSalt = genPassword(userRequest.password as string);
    const userVendor = new User();
    userVendor.personId = person.personId;
    userVendor.roleId = role.roleId;
    userVendor.username = userRequest.userName;
    userVendor.hash = hashSalt.hash;
    userVendor.salt = hashSalt.salt;
    userVendor.person = person;
    userVendor.roles = [role];
    return userVendor;
  }

  private buildSavePersonResponse(person: Person): PersonResponse {
    return new PersonResponse(person);
  }
}
