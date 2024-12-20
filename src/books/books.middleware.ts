import { Injectable, NestMiddleware, Logger } from '@nestjs/common';
import { ObjectType } from 'typescript';

@Injectable()
export class BooksMiddleware implements NestMiddleware {

  private readonly logger = new Logger(BooksMiddleware.name)
  use(req: any, res: any, next: () => void) {
    const emptyBody = (Obj: ObjectType): boolean =>
      Object.keys(req.body).length === 0;

    if (emptyBody(req.body)) {
      this.logger.log(`[Middleware] {${req.originalUrl}, ${req.method}}`);
    }
    if (!emptyBody(req.body)) {
      this.logger.log(`[Middleware] {${req.originalUrl}, ${req.method}} Datos de entrada: ${JSON.stringify(req.body)}`);
    }
    next();
  }
}
