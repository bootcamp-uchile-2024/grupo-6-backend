"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const books_interceptor_1 = require("./books/books.interceptor");
const books_filter_1 = require("./books/books.filter");
const config_1 = require("@nestjs/config");
const dotenv = require("dotenv");
const swagger_config_1 = require("./config/swagger/swagger.config");
dotenv.config();
async function bootstrap() {
    dotenv.config({ path: '.env' });
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalInterceptors(new books_interceptor_1.BooksInterceptor());
    app.useGlobalFilters(new books_filter_1.BooksFilter());
    app.enableCors();
    (0, swagger_config_1.configSwagger)(app);
    const configService = app.get(config_1.ConfigService);
    await app.listen(process.env.PUERTO_NEST ?? 3000);
}
bootstrap();
//# sourceMappingURL=main.js.map