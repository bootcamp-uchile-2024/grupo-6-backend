import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';
import { Response, Request } from 'express';

@Catch(HttpException)
export class BooksFilter<T> implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const status = exception.getStatus();
    console.log('----------Exception filter----------');
    console.log('Error HTTP status code: ', status);
    console.log('Exception message: ', exception.getResponse());
    response.status(status).json({
      statusCode: status,
      error: exception.getResponse(),
    });
  }
}
