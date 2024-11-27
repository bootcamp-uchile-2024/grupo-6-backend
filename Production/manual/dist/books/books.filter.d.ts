import { ArgumentsHost, ExceptionFilter, HttpException } from '@nestjs/common';
export declare class BooksFilter<T> implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost): void;
}
