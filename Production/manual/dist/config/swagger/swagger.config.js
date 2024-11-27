"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configSwagger = configSwagger;
const config_1 = require("@nestjs/config");
const swagger_1 = require("@nestjs/swagger");
const products_module_1 = require("../../products/products.module");
const purchases_module_1 = require("../../purchases/purchases.module");
const shoppingcart_module_1 = require("../../shoppingcart/shoppingcart.module");
const users_module_1 = require("../../users/users.module");
function configSwagger(app) {
    const configService = app.get(config_1.ConfigService);
    const title = `${process.env.npm_package_name.replaceAll("-", " ")} - Módulo ${configService.get("ENVIROMENT")}`;
    const description = process.env.npm_package_description;
    const version = process.env.npm_package_version;
    const authorName = process.env.npm_package_author_name;
    const authorUrl = process.env.npm_package_author_url;
    const authorEmail = process.env.npm_package_author_email;
    const licence = process.env.npm_package_license;
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
    const configPurchase = new swagger_1.DocumentBuilder()
        .setTitle(title)
        .setDescription(description)
        .setVersion(version)
        .setContact(authorName, authorUrl, authorEmail)
        .setLicense(licence, "")
        .addTag('Purchases')
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
    const documentPurchases = swagger_1.SwaggerModule.createDocument(app, configPurchase, {
        include: [purchases_module_1.PurchasesModule],
    });
    swagger_1.SwaggerModule.setup('api', app, documentApp);
    swagger_1.SwaggerModule.setup('api/products', app, documentProducts);
    swagger_1.SwaggerModule.setup('api/shoppingcart', app, documentShoppincart);
    swagger_1.SwaggerModule.setup('api/users', app, documentUsers);
    swagger_1.SwaggerModule.setup('api/purchases', app, documentPurchases);
}
//# sourceMappingURL=swagger.config.js.map