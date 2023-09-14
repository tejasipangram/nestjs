import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class EmployeeMiddlware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('middlware called ', req.url);
    next();
  }
}
