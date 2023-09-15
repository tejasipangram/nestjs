import {
  BadGatewayException,
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
  UseFilters,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { UnauthorizedExceptionFilter } from 'src/exceptions/Auth.exeptions';
import { ShowMessage } from 'src/exceptions/Customs';
import { HttpExceptionFilter } from 'src/exceptions/Exeption';

@Injectable()
@UseFilters(UnauthorizedExceptionFilter)
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();

    // throw new UnauthorizedException();
    return true;
  }
}
