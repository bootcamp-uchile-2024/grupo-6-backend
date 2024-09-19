"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
const shoppingcart_module_1 = require("./shoppingcart/shoppingcart.module");
const products_module_1 = require("./products/products.module");
const books_interceptor_1 = require("./books/books.interceptor");
const books_filter_1 = require("./books/books.filter");
const config_1 = require("@nestjs/config");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const configService = app.get(config_1.ConfigService);
    console.log('AMBIENTE:', configService.get("ENVIROMENT"));
    app.useGlobalInterceptors(new books_interceptor_1.BooksInterceptor());
    app.useGlobalFilters(new books_filter_1.BooksFilter());
    const configApp = new swagger_1.DocumentBuilder()
        .setTitle('API Páginas Selectas Backend')
        .setDescription('Esta api describe la app general del e-commerce Páginas Selectas, para ir a productos localhost:3000/api/porducts, para ir a carrito de compras localhost:3000/api/shoppingcart')
        .setVersion('1.0.0')
        .addTag('App')
        .build();
    const configProducts = new swagger_1.DocumentBuilder()
        .setTitle('API Páginas Selectas Backend')
        .setDescription('Esta api describe el apartado de products del e-commerce Páginas Selectas')
        .setVersion('1.0.0')
        .addTag('Products')
        .build();
    const configShoppingcart = new swagger_1.DocumentBuilder()
        .setTitle('API Páginas Selectas Backend')
        .setDescription('Esta api describe el apartado de Shoppincart del e-commerce Páginas Selectas')
        .setVersion('1.0.0')
        .addTag('Shoppingcart')
        .build();
    const documentApp = swagger_1.SwaggerModule.createDocument(app, configApp);
    const documentProducts = swagger_1.SwaggerModule.createDocument(app, configProducts, {
        include: [products_module_1.ProductsModule],
    });
    const documentShoppincart = swagger_1.SwaggerModule.createDocument(app, configShoppingcart, {
        include: [shoppingcart_module_1.ShoppingcartModule],
    });
    swagger_1.SwaggerModule.setup('api', app, documentApp);
    swagger_1.SwaggerModule.setup('api/products', app, documentProducts);
    swagger_1.SwaggerModule.setup('api/shoppingcart', app, documentShoppincart);
    await app.listen(configService.get('PORT'));
}
bootstrap();
//# sourceMappingURL=main.js.map