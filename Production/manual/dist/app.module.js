"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const equipo_module_1 = require("./equipo/equipo.module");
const products_module_1 = require("./products/products.module");
const shoppingcart_module_1 = require("./shoppingcart/shoppingcart.module");
const home_module_1 = require("./home/home.module");
const books_middleware_1 = require("./books/books.middleware");
const users_module_1 = require("./users/users.module");
const config_1 = require("@nestjs/config");
const orm_module_1 = require("./orm/orm.module");
const purchases_module_1 = require("./purchases/purchases.module");
let AppModule = class AppModule {
    configure(consumer) {
        consumer
            .apply(books_middleware_1.BooksMiddleware)
            .forRoutes('*');
    }
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            equipo_module_1.EquipoModule,
            products_module_1.ProductsModule,
            shoppingcart_module_1.ShoppingcartModule,
            home_module_1.HomeModule,
            users_module_1.UsersModule,
            orm_module_1.OrmModule,
            config_1.ConfigModule.forRoot({
                envFilePath: process.env.ARCHIVO_ENV ? `.env.${process.env.ARCHIVO_ENV}` : '.env',
                isGlobal: true,
                validate: (config) => {
                    if (!config.PORT) {
                        throw new Error('PORT is required');
                    }
                    if (config.PORT == '6000') {
                        throw new Error('PORT must be diferent from 6000');
                    }
                    return {
                        PORT: parseInt(config.PORT),
                        ENVIROMENT: config.ENVIROMENT,
                    };
                },
            }),
            purchases_module_1.PurchasesModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map