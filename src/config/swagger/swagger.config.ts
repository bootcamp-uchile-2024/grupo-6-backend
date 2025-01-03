import { INestApplication } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { ProductsModule } from "src/products/products.module";
import { PurchasesModule } from "src/purchases/purchases.module";
import { ShoppingcartModule } from "src/shoppingcart/shoppingcart.module";
import { UsersModule } from "src/users/users.module";

export function configSwagger(app: INestApplication) {

    const configService: ConfigService = app.get(ConfigService);

    const title = `${process.env.npm_package_name.replaceAll("-", " ")} - Módulo ${configService.get("ENVIROMENT")}`;
    const description = process.env.npm_package_description;
    const version = process.env.npm_package_version;
    const authorName = process.env.npm_package_author_name;
    const authorUrl = process.env.npm_package_author_url;
    const authorEmail = process.env.npm_package_author_email;
    const licence = process.env.npm_package_license;

    //console.log('AMBIENTE:', configService.get("ENVIROMENT"));
    //console.log('PUERTO:', configService.get("PORT"));

    const configApp = new DocumentBuilder()
        .setTitle(title)
        .setDescription(description)
        .setVersion(version)
        .setContact(authorName, authorUrl, authorEmail)
        .setLicense(licence, "")
        .addTag('App')
        .addBearerAuth()
        .build();

    const configProducts = new DocumentBuilder()
        .setTitle(title)
        .setDescription(description)
        .setVersion(version)
        .setContact(authorName, authorUrl, authorEmail)
        .setLicense(licence, "")
        .addTag('Products')
        .build();

    const configShoppingcart = new DocumentBuilder()
        .setTitle(title)
        .setDescription(description)
        .setVersion(version)
        .setContact(authorName, authorUrl, authorEmail)
        .setLicense(licence, "")
        .addTag('Shoppingcart')
        .build();

    const configUser = new DocumentBuilder()
        .setTitle(title)
        .setDescription(description)
        .setVersion(version)
        .setContact(authorName, authorUrl, authorEmail)
        .setLicense(licence, "")
        .addTag('Users')
        .build();

    const configPurchase = new DocumentBuilder()
        .setTitle(title)
        .setDescription(description)
        .setVersion(version)
        .setContact(authorName, authorUrl, authorEmail)
        .setLicense(licence, "")
        .addTag('Purchases')
        .build();

    const documentApp = SwaggerModule.createDocument(app, configApp);
    const documentProducts = SwaggerModule.createDocument(
        app, 
        configProducts, 
        { 
        include: [ProductsModule] 
        }
    );
    const documentShoppincart = SwaggerModule.createDocument(
        app,
        configShoppingcart,
        {
        include: [ShoppingcartModule],
        }
    );
    const documentUsers = SwaggerModule.createDocument(
        app,
        configUser,
        {
        include: [UsersModule],
        }
    );
    const documentPurchases = SwaggerModule.createDocument(
        app,
        configPurchase,
        {
        include: [PurchasesModule],
        }
    );

    SwaggerModule.setup('api', app, documentApp, {
        swaggerOptions: {
          persistAuthorization: true // PERMITE GUARDAR EL JWT
        }
      });
    SwaggerModule.setup('api/products', app, documentProducts);
    SwaggerModule.setup('api/shoppingcart', app, documentShoppincart);
    SwaggerModule.setup('api/users', app, documentUsers);
    SwaggerModule.setup('api/purchases', app, documentPurchases);

}