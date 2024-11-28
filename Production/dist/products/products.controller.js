"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const libro_1 = require("../orm/entity/libro");
const parse_enum_genero_array_pipe_pipe_1 = require("../parse-enum-array-pipe/parse-enum-genero-array-pipe.pipe");
const parse_enum_idioma_array_pipe_1 = require("../parse-enum-array-pipe/parse-enum-idioma-array-pipe");
const get_product_dto_1 = require("./dto/get-product.dto");
const update_product_dto_1 = require("./dto/update-product.dto");
const encuadernacionEnum_1 = require("./entities/encuadernacionEnum");
const generoEnum_1 = require("./entities/generoEnum");
const idioma_1 = require("./entities/idioma");
const validation_delete_products_pipe_1 = require("./pipes/validation-delete-products.pipe");
const validation_update_products_pipe_1 = require("./pipes/validation-update-products.pipe");
const products_service_1 = require("./products.service");
const platform_express_1 = require("@nestjs/platform-express");
const validation_create_products_pipe_1 = require("./pipes/validation-create-products.pipe");
const validation_get_product_pipe_1 = require("./pipes/validation-get-product.pipe");
let ProductsController = class ProductsController {
    constructor(productsService) {
        this.productsService = productsService;
    }
    async create(createProductDto, caratula) {
        try {
            return await this.productsService.create(createProductDto, caratula);
        }
        catch (error) {
            throw new common_1.BadRequestException(error);
        }
    }
    async getFilteredProducts(priceMin, priceMax, pagina = 1, cantidad = 12, sortBy, autor, nombre, rating, genero, editorial, idioma, isbn, encuadernacion, agnoPublicacionMin, agnoPublicacionMax) {
        const filters = {
            priceMin,
            priceMax,
            pagina,
            cantidad,
            sortBy,
            autor,
            nombre,
            rating,
            genero,
            editorial: typeof editorial === 'string' ? [editorial] : editorial,
            idioma,
            isbn,
            encuadernacion,
            agnoPublicacionMin,
            agnoPublicacionMax,
        };
        try {
            return await this.productsService.getFilteredProducts(filters);
        }
        catch (error) {
            throw new common_1.HttpException('Error al obtener categorias', 400);
        }
    }
    getSearchedProducts(query, priceMin, priceMax, limit = 10, offset = 0, sortBy, autor, rating, genero, editorial, idioma, encuadernacion, agnoPublicacionMin, agnoPublicacionMax) {
        console.log(typeof idioma);
        const filters = {
            priceMin,
            priceMax,
            limit,
            offset,
            sortBy,
            autor,
            rating,
            genero,
            editorial,
            idioma,
            encuadernacion,
            agnoPublicacionMin,
            agnoPublicacionMax,
        };
        try {
            return this.productsService.getSearchedProductos(query, filters);
        }
        catch (error) {
            throw new common_1.HttpException('No se ha encontrado ningún producto con estas características', 404);
        }
    }
    async findOne(isbn) {
        try {
            return await this.productsService.findOne(isbn);
        }
        catch (error) {
            throw new common_1.HttpException('Error al obtener el producto', 400);
        }
    }
    async getGenres() {
        try {
            return await this.productsService.getGenres();
        }
        catch (error) {
            throw new common_1.HttpException('Error al obtener los géneros de libros', 400);
        }
    }
    async getConexion() {
        const resolucion = await this.productsService.getConexion();
        return resolucion;
    }
    async remove(id) {
        try {
            return await this.productsService.remove(+id);
        }
        catch (error) {
            throw new common_1.HttpException('Error al eliminar el libro', 400);
        }
    }
    async update(id, updatePurchaseDto, caratula) {
        try {
            console.log(id, updatePurchaseDto, caratula);
            return await this.productsService.update(id, updatePurchaseDto, caratula);
        }
        catch (error) {
            if (error instanceof common_1.BadRequestException) {
                throw error;
            }
            else {
                throw new common_1.HttpException(error, 400);
            }
        }
    }
};
exports.ProductsController = ProductsController;
__decorate([
    (0, swagger_1.ApiTags)('Products'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('caratula')),
    (0, common_1.UsePipes)(validation_create_products_pipe_1.ValidationCreateProductsPipe),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Creación de producto exitosa', type: get_product_dto_1.GetProductDto }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Error al crear producto. Revisar datos ingresados', }),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiTags)('Products'),
    (0, swagger_1.ApiQuery)({ name: 'priceMin', description: 'Filtro con precio mínimo', required: false, }),
    (0, swagger_1.ApiQuery)({ name: 'priceMax', description: 'Filtro con precio máximo', required: false, }),
    (0, swagger_1.ApiQuery)({
        name: 'pagina',
        description: 'Número de la página a mostrar, empezando desde 1. Valor por defecto = 1',
        required: false,
    }),
    (0, swagger_1.ApiQuery)({ name: 'cantidad', description: 'Cantidad de productos a devolver. Valor por defecto = 12', required: false, }),
    (0, swagger_1.ApiQuery)({ name: 'sortBy', description: 'Nombre de la propiedad sobre la cual filtrar', required: false, example: 'precio', }),
    (0, swagger_1.ApiQuery)({ name: 'autor', description: 'Nombre del autor del libro', required: false, example: 'Gabriel Garcia Marquez', }),
    (0, swagger_1.ApiQuery)({ name: 'nombre', description: 'Título del libro', required: false, example: 'Cien años de soledad', }),
    (0, swagger_1.ApiQuery)({ name: 'rating', description: 'Rating del libro. Valor entre 0 y 5', required: false, }),
    (0, swagger_1.ApiQuery)({
        name: 'genero',
        description: 'Genero del libro. Puede filtrarse con más de uno',
        required: false,
        enum: generoEnum_1.GeneroEnum,
        isArray: true,
    }),
    (0, swagger_1.ApiQuery)({
        name: 'editorial',
        description: 'Editorial del libro. Puede filtrarse con más de uno. Indicarlos separados con coma',
        required: false,
        example: 'Lumen,Taurus',
    }),
    (0, swagger_1.ApiQuery)({
        name: 'idioma',
        description: 'Idioma del libro. Puede filtrarse con más de uno',
        required: false,
        enum: idioma_1.Idioma,
        isArray: true,
    }),
    (0, swagger_1.ApiQuery)({ name: 'isbn', description: 'Código ISBN del libro', required: false, example: '9789585581616', }),
    (0, swagger_1.ApiQuery)({ name: 'encuadernacion', description: 'Encuadernación del libro', required: false, enum: encuadernacionEnum_1.EncuadernacionEnum, }),
    (0, swagger_1.ApiQuery)({ name: 'agnoPublicacionMin', description: 'Año mínimo de publicación del libro', required: false, example: 2010, }),
    (0, swagger_1.ApiQuery)({ name: 'agnoPublicacionMax', description: 'Año máximo de publicación del libro', required: false, example: 2024, }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Solicitud generada correctamente', type: get_product_dto_1.GetProductDto, isArray: true }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'No existen productos que cumplan la solicitud', }),
    (0, common_1.Get)('catalog'),
    __param(0, (0, common_1.Query)('priceMin', new common_1.ParseIntPipe({ errorHttpStatusCode: 400, optional: true }))),
    __param(1, (0, common_1.Query)('priceMax', new common_1.ParseIntPipe({ errorHttpStatusCode: 400, optional: true }))),
    __param(2, (0, common_1.Query)('pagina', new common_1.ParseIntPipe({ errorHttpStatusCode: 400, optional: true }))),
    __param(3, (0, common_1.Query)('cantidad', new common_1.ParseIntPipe({ errorHttpStatusCode: 400, optional: true }))),
    __param(4, (0, common_1.Query)('sortBy')),
    __param(5, (0, common_1.Query)('autor')),
    __param(6, (0, common_1.Query)('nombre')),
    __param(7, (0, common_1.Query)('rating', new common_1.ParseIntPipe({ errorHttpStatusCode: 400, optional: true }))),
    __param(8, (0, common_1.Query)('genero', new parse_enum_genero_array_pipe_pipe_1.ParseEnumGeneroArrayPipe(generoEnum_1.GeneroEnum))),
    __param(9, (0, common_1.Query)('editorial', new common_1.ParseArrayPipe({ items: String, separator: ',', optional: true, errorHttpStatusCode: 400, }))),
    __param(10, (0, common_1.Query)('idioma', new parse_enum_idioma_array_pipe_1.ParseEnumIdiomaArrayPipe(idioma_1.Idioma))),
    __param(11, (0, common_1.Query)('isbn')),
    __param(12, (0, common_1.Query)('encuadernacion', new common_1.ParseEnumPipe(encuadernacionEnum_1.EncuadernacionEnum, { optional: true }))),
    __param(13, (0, common_1.Query)('agnoPublicacionMin', new common_1.ParseIntPipe({ errorHttpStatusCode: 400, optional: true }))),
    __param(14, (0, common_1.Query)('agnoPublicacionMax', new common_1.ParseIntPipe({ errorHttpStatusCode: 400, optional: true }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Object, Object, String, String, String, Number, Object, Object, Object, String, String, Number, Number]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "getFilteredProducts", null);
__decorate([
    (0, swagger_1.ApiTags)('Products'),
    (0, swagger_1.ApiQuery)({ name: 'query', description: 'Nombre, autor o ISBN de libro buscado', }),
    (0, swagger_1.ApiQuery)({ name: 'priceMin', description: 'Filtro con precio mínimo', required: false, }),
    (0, swagger_1.ApiQuery)({ name: 'priceMax', description: 'Filtro con precio máximo', required: false, }),
    (0, swagger_1.ApiQuery)({ name: 'limit', description: 'Número máximo de productos a entregar. Valor por defecto = 10', required: false, }),
    (0, swagger_1.ApiQuery)({
        name: 'offset',
        description: 'Desde qué posición empezar a devolver productos. Valor por defecto = 0',
        required: false,
    }),
    (0, swagger_1.ApiQuery)({ name: 'sortBy', description: 'Nombre de la propiedad sobre la cual filtrar', required: false, example: 'precio', }),
    (0, swagger_1.ApiQuery)({ name: 'autor', description: 'Nombre del autor del libro', required: false, example: 'Gabriel Garcia Marquez', }),
    (0, swagger_1.ApiQuery)({ name: 'rating', description: 'Rating del libro. Valor entre 0 y 5', required: false, }),
    (0, swagger_1.ApiQuery)({
        name: 'genero',
        description: 'Genero del libro. Puede filtrarse con más de uno',
        required: false,
        enum: generoEnum_1.GeneroEnum,
        isArray: true,
    }),
    (0, swagger_1.ApiQuery)({
        name: 'editorial',
        description: 'Editorial del libro. Puede filtrarse con más de uno. Indicarlos separados con coma',
        required: false,
        example: 'Lumen,Taurus',
    }),
    (0, swagger_1.ApiQuery)({
        name: 'idioma',
        description: 'Idioma del libro. Puede filtrarse con más de uno',
        required: false,
        enum: idioma_1.Idioma,
        isArray: true,
    }),
    (0, swagger_1.ApiQuery)({ name: 'encuadernacion', description: 'Encuadernación del libro', required: false, enum: encuadernacionEnum_1.EncuadernacionEnum, }),
    (0, swagger_1.ApiQuery)({ name: 'agnoPublicacionMin', description: 'Año mínimo de publicación del libro', required: false, example: 2010, }),
    (0, swagger_1.ApiQuery)({ name: 'agnoPublicacionMax', description: 'Año máximo de publicación del libro', required: false, example: 2024, }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Solicitud generada correctamente', type: get_product_dto_1.GetProductDto, isArray: true }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'No existen productos que cumplan la solicitud', }),
    (0, common_1.Get)('search'),
    __param(0, (0, common_1.Query)('query')),
    __param(1, (0, common_1.Query)('priceMin', new common_1.ParseIntPipe({ errorHttpStatusCode: 400, optional: true }))),
    __param(2, (0, common_1.Query)('priceMax', new common_1.ParseIntPipe({ errorHttpStatusCode: 400, optional: true }))),
    __param(3, (0, common_1.Query)('limit', new common_1.ParseIntPipe({ errorHttpStatusCode: 400, optional: true }))),
    __param(4, (0, common_1.Query)('offset', new common_1.ParseIntPipe({ errorHttpStatusCode: 400, optional: true }))),
    __param(5, (0, common_1.Query)('sortBy')),
    __param(6, (0, common_1.Query)('autor')),
    __param(7, (0, common_1.Query)('rating', new common_1.ParseIntPipe({ errorHttpStatusCode: 400, optional: true }))),
    __param(8, (0, common_1.Query)('genero', new parse_enum_genero_array_pipe_pipe_1.ParseEnumGeneroArrayPipe(generoEnum_1.GeneroEnum))),
    __param(9, (0, common_1.Query)('editorial', new common_1.ParseArrayPipe({ items: String, separator: ',', optional: true, errorHttpStatusCode: 400, }))),
    __param(10, (0, common_1.Query)('idioma', new parse_enum_idioma_array_pipe_1.ParseEnumIdiomaArrayPipe(idioma_1.Idioma))),
    __param(11, (0, common_1.Query)('encuadernacion', new common_1.ParseEnumPipe(encuadernacionEnum_1.EncuadernacionEnum, { optional: true }))),
    __param(12, (0, common_1.Query)('agnoPublicacionMin', new common_1.ParseIntPipe({ errorHttpStatusCode: 400, optional: true }))),
    __param(13, (0, common_1.Query)('agnoPublicacionMax', new common_1.ParseIntPipe({ errorHttpStatusCode: 400, optional: true }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number, Number, Object, Object, String, String, Number, Object, Object, Object, String, Number, Number]),
    __metadata("design:returntype", Array)
], ProductsController.prototype, "getSearchedProducts", null);
__decorate([
    (0, swagger_1.ApiTags)('Products'),
    (0, common_1.UsePipes)(validation_get_product_pipe_1.ValidationGetProductsPipe),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Este codigo se debe a que se pudo enviar el libro en base al isbn ingresado.', type: get_product_dto_1.GetProductDto, }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Este codigo se debe a que no encuentra el isbn del libro.', }),
    (0, common_1.Get)('search/:isbn'),
    __param(0, (0, common_1.Param)('isbn')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiTags)('Products'),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Se obtuvo la lista de generos de forma satisfactoria.', type: String, isArray: true }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Hubo un error al obtener la lista de generos.', }),
    (0, common_1.Get)('genres'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "getGenres", null);
__decorate([
    (0, common_1.Get)('conexion'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "getConexion", null);
__decorate([
    (0, swagger_1.ApiTags)('Products'),
    (0, common_1.UsePipes)(validation_delete_products_pipe_1.ValidationDeleteProductsPipe),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Se eliminó el libro correctamente' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Error al eliminar el libro' }),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "remove", null);
__decorate([
    (0, swagger_1.ApiTags)('Products'),
    (0, common_1.UsePipes)(validation_update_products_pipe_1.ValidationUpdateProductsPipe),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('caratula')),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Se actualizó el libro correctamente' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Error al actualizar libro' }),
    (0, swagger_1.ApiParam)({ name: 'id', required: true, type: 'number', description: 'ID del libro' }),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [libro_1.Libro,
        update_product_dto_1.UpdateProductDto, Object]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "update", null);
exports.ProductsController = ProductsController = __decorate([
    (0, common_1.Controller)('products'),
    __metadata("design:paramtypes", [products_service_1.ProductsService])
], ProductsController);
//# sourceMappingURL=products.controller.js.map