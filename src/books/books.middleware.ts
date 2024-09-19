import { Injectable, NestMiddleware } from '@nestjs/common';
import { ObjectType } from 'typescript';

@Injectable()
export class BooksMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log('----------Middleware BooksMiddleware----------');
    const emptyBody = (Obj: ObjectType): boolean =>
      Object.keys(req.body).length === 0;

    if (emptyBody(req.body)) {
      console.log('Path: ', '\n', req.originalUrl);
      console.log('Method: ', '\n', req.method);
    }
    if (!emptyBody(req.body)) {
      console.log('Path: ', '\n', req.originalUrl);
      console.log('Method: ', '\n', req.method);
      console.log('Body: ', '\n', req.body);
    }
    next();
  }
}
