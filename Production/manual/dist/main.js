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
const users_module_1 = require("./users/users.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const configService = app.get(config_1.ConfigService);
    app.useGlobalInterceptors(new books_interceptor_1.BooksInterceptor());
    app.useGlobalFilters(new books_filter_1.BooksFilter());
    const title = `${process.env.npm_package_name.replaceAll("-", " ")} - Módulo ${configService.get("ENVIROMENT")}`;
    const description = process.env.npm_package_description;
    const version = process.env.npm_package_version;
    const authorName = process.env.npm_package_author_name;
    const authorUrl = process.env.npm_package_author_url;
    const authorEmail = process.env.npm_package_author_email;
    const licence = process.env.npm_package_license;
    console.log('AMBIENTE:', configService.get("ENVIROMENT"));
    console.log('PUERTO:', configService.get("PORT"));
    const configApp = new swagger_1.DocumentBuilder()
        .setTitle(title)
        .setDescription(description)
        .setVersion(version)
        .setContact(authorName, authorUrl, authorEmail)
        .setLicense(licence, "")
        .addTag('App')
        .build();
    const configProducts = new swagger_1.DocumentBuilder()
        .setTitle(title)
        .setDescription(description)
        .setVersion(version)
        .setContact(authorName, authorUrl, authorEmail)
        .setLicense(licence, "")
        .addTag('Products')
        .build();
    const configShoppingcart = new swagger_1.DocumentBuilder()
        .setTitle(title)
        .setDescription(description)
        .setVersion(version)
        .setContact(authorName, authorUrl, authorEmail)
        .setLicense(licence, "")
        .addTag('Shoppingcart')
        .build();
    const configUser = new swagger_1.DocumentBuilder()
        .setTitle(title)
        .setDescription(description)
        .setVersion(version)
        .setContact(authorName, authorUrl, authorEmail)
        .setLicense(licence, "")
        .addTag('Users')
        .build();
    const documentApp = swagger_1.SwaggerModule.createDocument(app, configApp);
    const documentProducts = swagger_1.SwaggerModule.createDocument(app, configProducts, {
        include: [products_module_1.ProductsModule]
    });
    const documentShoppincart = swagger_1.SwaggerModule.createDocument(app, configShoppingcart, {
        include: [shoppingcart_module_1.ShoppingcartModule],
    });
    const documentUsers = swagger_1.SwaggerModule.createDocument(app, configUser, {
        include: [users_module_1.UsersModule],
    });
    swagger_1.SwaggerModule.setup('api', app, documentApp);
    swagger_1.SwaggerModule.setup('api/products', app, documentProducts);
    swagger_1.SwaggerModule.setup('api/shoppingcart', app, documentShoppincart);
    swagger_1.SwaggerModule.setup('api/users', app, documentUsers);
    await app.listen(configService.get('PORT'));
}
bootstrap();
//# sourceMappingURL=main.js.map