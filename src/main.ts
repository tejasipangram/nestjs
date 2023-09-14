import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { EmployeeMiddlware } from './middleware/employee.middleware';
import { logger } from './middleware/functionmiddlware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  await app.listen(3000);
}
bootstrap();
