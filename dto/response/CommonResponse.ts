export class CommonResponse {
  private statusCode: string;
  private message: string;

  constructor(statusCode: string, message: string) {
    this.statusCode = statusCode;
    this.message = message;
  }
}