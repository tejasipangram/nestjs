import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';
import { EmployeeModule } from './employee/employee.module';
import { PipeModule } from './pipes/pipe.module';

@Module({
  imports: [TodoModule, EmployeeModule, PipeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
