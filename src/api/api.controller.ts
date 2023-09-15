import {
  BadGatewayException,
  Controller,
  ForbiddenException,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  UnauthorizedException,
  UseFilters,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { ShowMessage } from 'src/exceptions/Customs';
import { HttpExceptionFilter } from 'src/exceptions/Exeption';
import { AuthGuard } from 'src/guards/auth.guard';
import { LoggingInterceptor } from 'src/interceptors/Intro';

@Controller('api')
@UseGuards(AuthGuard)
@UseInterceptors(LoggingInterceptor)
export class ApiController {
  @Get(':id')
  getData(@Param('id', ParseIntPipe) id: number): string {
    if (id === 34) {
      //this is basic exeption handler
      // throw new HttpException('tis is not allowrd', HttpStatus.NOT_ACCEPTABLE);
      //this is custom exeption handler
      // throw new HttpException(
      //   {
      //     status: 454,
      //     message: 'This is custom message',
      //     from: 'tejasgiri',
      //   },
      //   HttpStatus.BAD_REQUEST,
      // );
    }

    if (id == 30) {
      throw new ShowMessage();
    }

    if (id == 40) {
    }
    return 'this is id ' + id;
  }
}
