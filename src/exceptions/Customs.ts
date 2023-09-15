import {
  Catch,
  HttpException,
  HttpStatus,
  HttpVersionNotSupportedException,
} from '@nestjs/common';
@Catch(HttpException)
export class ShowMessage extends HttpException {
  constructor() {
    super(
      'rahne de bhai kya kar lega result dekh kar',
      HttpStatus.METHOD_NOT_ALLOWED,
    );
  }
}
