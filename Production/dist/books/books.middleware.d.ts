import { NestMiddleware } from '@nestjs/common';
export declare class BooksMiddleware implements NestMiddleware {
    use(req: any, res: any, next: () => void): void;
}
