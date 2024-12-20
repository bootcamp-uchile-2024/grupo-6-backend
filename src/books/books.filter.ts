import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  Logger,
} from '@nestjs/common';
import { Response } from 'express';


@Catch(HttpException)
export class BooksFilter<T> implements ExceptionFilter {
  private readonly logger = new Logger(BooksFilter.name)

  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const status = exception.getStatus();
    this.logger.warn('[Exception Filter] ' + JSON.stringify(exception.getResponse()));
    response.status(status).json({
      statusCode: status,
      error: exception.getResponse(),
    });
  }
}
