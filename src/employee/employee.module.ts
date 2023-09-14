import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { EmployeeController } from './employee.controller';
import { NestModule } from '@nestjs/common';
import { EmployeeMiddlware } from 'src/middleware/employee.middleware';
@Module({
  controllers: [EmployeeController],
})
export class EmployeeModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(EmployeeMiddlware)
      .exclude({ path: 'youpath', method: RequestMethod.ALL })
      // forRoutes('employee');
      //   .forRoutes({ path: 'employee', method: RequestMethod.GET });

      .forRoutes(EmployeeController);
  }
}
