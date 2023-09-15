import {
  Catch,
  UnauthorizedException,
  ArgumentsHost,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';

@Catch(UnauthorizedException)
export class UnauthorizedExceptionFilter {
  catch(exception: UnauthorizedException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    response.status(HttpStatus.UNAUTHORIZED).json({
      statusCode: HttpStatus.UNAUTHORIZED,
      message: 'Custom Unauthorized Message', // Customize this message as needed
      timestamp: new Date().toISOString(),
    });
  }
}
