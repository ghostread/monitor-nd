import { PersonServiceI } from '../../service/person/PersonServiceI';
import { PersonRequest } from '../../dto/request/PersonRequest';
import { PersonResponse } from '../../dto/response/PersonResponse';
import { PersonServiceImp } from '../../service/person/PersonServiceImp';
import { Person, User } from '@pxp-nd/common';
import { IUserService } from '../../service/User/IUserService';
import { UserService } from '../../service/User/UserService';
import { RoleService } from '../../service/Role/RoleService';
import { IRoleService } from '../../service/Role/IRoleService';
import { genPassword } from '@pxp-nd/auth';
import { VendorUserRequest } from '../../dto/request/VendorUserRequest';
import { UserRequest } from '../../dto/request/UserRequest';

export class CreateUserVendorUseCase {
  private readonly personService: PersonServiceI;
  private readonly userService: IUserService;
  private readonly roleService: IRoleService;

  constructor() {
    this.personService = new PersonServiceImp();
    this.userService = new UserService();
    this.roleService = new RoleService();
  }

  public async execute(vendorUserRequest: VendorUserRequest): Promise<any> {
    const role = await this.roleService.findRoleByRole('vendor');
    const person = await this.personService.addPerson(this.buildPerson(vendorUserRequest.person));
    return this.userService.createUser(this.buildUser(vendorUserRequest.user, person.personId, role.roleId));

    // return userVendor;
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

  private buildUser(userRequest: UserRequest, personId: number, roleId: number): User {
    const userVendor = new User();
    userVendor.personId = personId;
    userVendor.roleId = roleId;
    userVendor.username = userRequest.username;
    const hashSalt = genPassword(userRequest.password as string);
    userVendor.hash = hashSalt.hash;
    userVendor.salt = hashSalt.salt;
    userVendor.createdBy = 'admin';
    return userVendor;
  }

  private buildSavePersonResponse(person: Person): PersonResponse {
    return new PersonResponse(person);
  }
}