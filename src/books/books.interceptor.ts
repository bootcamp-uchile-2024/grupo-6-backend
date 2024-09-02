import { CallHandler, ExecutionContext, Injectable, NestInterceptor, Response } from '@nestjs/common';
import { response } from 'express';
import { catchError, map, Observable, pipe, tap } from 'rxjs';

@Injectable()
export class BooksInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle()
    .pipe(
      map((val) => {
        console.log('----------Interceptor----------');
        console.log('----------Flujo de salida----------');
        console.log(val);
        return val; 
      }),
    );
    
  }
}
