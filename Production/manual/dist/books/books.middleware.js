"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BooksMiddleware = void 0;
const common_1 = require("@nestjs/common");
let BooksMiddleware = class BooksMiddleware {
    use(req, res, next) {
        console.log('----------Middleware BooksMiddleware----------');
        const emptyBody = (Obj) => Object.keys(req.body).length === 0;
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
};
exports.BooksMiddleware = BooksMiddleware;
exports.BooksMiddleware = BooksMiddleware = __decorate([
    (0, common_1.Injectable)()
], BooksMiddleware);
//# sourceMappingURL=books.middleware.js.map