import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable, of, pipe } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log('Before...');

    const now = Date.now();
    //   return next
    //     .handle()
    //     .pipe(tap(() => console.log(`After... ${Date.now() - now}ms`)));
    // }

    //caching

    // const isCache = true;

    // if (isCache) {
    //   return of([{ name: 'tejas', lastname: 'giri' }]);
    // }
    // return next.handle();

    //set addition data

    // return next.handle().pipe(map((data) => ({ ...data, name: 'Tejas' })));

    return next.handle();
  }
}
