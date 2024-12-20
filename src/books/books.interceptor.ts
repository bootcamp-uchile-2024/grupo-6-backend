import {
  CallHandler,
  ExecutionContext,
  Injectable,
  Logger,
  NestInterceptor
} from '@nestjs/common';
import { map, Observable } from 'rxjs';

@Injectable()
export class BooksInterceptor implements NestInterceptor {

  private readonly logger = new Logger(BooksInterceptor.name)
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((val) => {
        this.logger.log(`[Interceptor] Datos de salida: ${JSON.stringify(val)}`);
        return val;
      }),
    );
  }
}
