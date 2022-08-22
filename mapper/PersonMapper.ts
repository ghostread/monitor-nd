import { Person } from '@pxp-nd/common';
import { PersonDto } from '../dto/PersonDto';

export function personToPersonDto(person: Person): PersonDto {
  const personDto = new PersonDto();
  personDto.name = person.name;
  personDto.lastName = person.lastName;
  personDto.lastName2 = person.lastName2;
  personDto.dni = person.dni;
  personDto.dniNumber = person.dniNumber;
  personDto.mail = person.mail;
  personDto.address = person.address;
  personDto.gender = person.gender;
  personDto.birthday = person.birthday;
  personDto.phone = person.phone;
  personDto.cellphone = person.cellphone;
  personDto.nationality = person.nationality;
  return personDto;
}
