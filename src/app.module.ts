import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';
import { EmployeeModule } from './employee/employee.module';
import { PipeModule } from './pipes/pipe.module';

import { ApiModule } from './api/api.module';
import { FileModule } from './file/file.module';
import { MulterModule } from '@nestjs/platform-express';
import * as path from 'path';
import { MulterConfigService } from './file/file.service';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [
    TodoModule,
    EmployeeModule,
    PipeModule,
    ApiModule,
    FileModule,
    MulterModule.register({ dest: './uploads' }),
    MongooseModule.forRoot(
      'mongodb+srv://developertejas2405:admin@cluster0.ef6pwur.mongodb.net/jobposting?retryWrites=true&w=majority',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
