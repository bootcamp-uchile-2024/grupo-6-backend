import { Injectable, NestMiddleware, Logger } from '@nestjs/common';
import { ObjectType } from 'typescript';

@Injectable()
export class ContrasenaMiddleware implements NestMiddleware {

  private readonly logger = new Logger(ContrasenaMiddleware.name)
  use(req: any, res: any, next: () => void) {
    const bodyModificado = { 
        ...req.body, 
        contrasena: req.body.contrasena ? '*****' : undefined
      };
    this.logger.log(`[Middleware] {${req.originalUrl}, ${req.method}} Datos de entrada: ${JSON.stringify(bodyModificado)}`);
    next();
  }
}
