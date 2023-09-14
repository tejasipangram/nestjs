import { Controller, Get } from '@nestjs/common';

@Controller('employee')
export class EmployeeController {
  @Get()
  getDetails(): string {
    return 'this data ';
  }
}
