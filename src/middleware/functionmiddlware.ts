import { Request, Response, NextFunction } from 'express';

export async function logger(req: Request, res: Response, next: NextFunction) {
  console.log('global middlware called');
  next();
}
