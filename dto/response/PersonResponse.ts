import { CommonResponse } from './CommonResponse';
import { Person } from '@pxp-nd/common';
import { SUCCESS_CODE, SUCCESS_MSG } from '../../constants/ResponseConstants';

export class PersonResponse extends CommonResponse {
  private person: Person;

  constructor(person: Person) {
    super(SUCCESS_CODE, SUCCESS_MSG);
    this.person = person;
  }

}