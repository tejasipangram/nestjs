import { Module, UseFilters } from '@nestjs/common';
import { ApiController } from './api.controller';
import { HttpExceptionFilter } from 'src/exceptions/Exeption';
import { APP_FILTER } from '@nestjs/core';

@Module({
  controllers: [ApiController],
  providers: [
    // {
    //   provide: APP_FILTER,
    //   useClass: HttpExceptionFilter,
    // },
  ],
})
export class ApiModule {}
