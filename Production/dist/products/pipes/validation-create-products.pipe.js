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
exports.ValidationCreateProductsPipe = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const autor_1 = require("../../orm/entity/autor");
const editorial_1 = require("../../orm/entity/editorial");
const encuadernacion_1 = require("../../orm/entity/encuadernacion");
const genero_1 = require("../../orm/entity/genero");
const idioma_libro_1 = require("../../orm/entity/idioma_libro");
const libro_1 = require("../../orm/entity/libro");
const typeorm_2 = require("typeorm");
let ValidationCreateProductsPipe = class ValidationCreateProductsPipe {
    constructor(libroRepository, idiomaRepository, encuadernacionRepository, editorialRepository, generoRepository, autorRepository) {
        this.libroRepository = libroRepository;
        this.idiomaRepository = idiomaRepository;
        this.encuadernacionRepository = encuadernacionRepository;
        this.editorialRepository = editorialRepository;
        this.generoRepository = generoRepository;
        this.autorRepository = autorRepository;
    }
    async transform(value, metadata) {
        if (metadata.type === 'body') {
            const existeProductoISBN = await this.libroRepository.existsBy({
                isbn: value.isbn,
            });
            if (existeProductoISBN) {
                throw new common_1.BadRequestException(`Ya existe un libro con ISBN: ${value.isbn}`);
            }
            const existeProductoEAN = await this.libroRepository.existsBy({
                codigo_barra: value.ean,
            });
            if (existeProductoEAN) {
                throw new common_1.BadRequestException(`Ya existe un libro con código de barra: ${value.ean}`);
            }
            const idiomaEntity = await this.idiomaRepository.findOneBy({
                descripcion: value.idioma,
            });
            if (!idiomaEntity) {
                throw new common_1.NotFoundException(`No existe el idioma: ${value.idioma}`);
            }
            value.id_idioma = idiomaEntity.id;
            const encuadernacionEntity = await this.encuadernacionRepository.findOneBy({
                descripcion: value.encuadernacion,
            });
            if (!encuadernacionEntity) {
                throw new common_1.NotFoundException(`No existe la encuadernación: ${value.encuadernacion}`);
            }
            value.id_encuadernacion = encuadernacionEntity.id;
            const editorialEntity = await this.editorialRepository.findOneBy({
                descripcion: value.editorial,
            });
            if (editorialEntity) {
                value.id_editorial = editorialEntity.id;
            }
            else {
                value.id_editorial = false;
            }
            ;
            const id_generos = [];
            for (const g of value.genero) {
                const generoEntity = await this.generoRepository.findOneBy({
                    descripcion: g
                });
                if (!generoEntity) {
                    throw new common_1.NotFoundException(`No existe un genero: ${g}`);
                }
                else {
                    id_generos.push(generoEntity.id);
                }
            }
            value.id_generos = id_generos;
            const id_autores = [];
            for (const autor of value.autor) {
                const autorEntity = await this.autorRepository.findOneBy({
                    nombre: autor
                });
                if (autorEntity) {
                    id_autores.push(autorEntity.id);
                }
                else {
                    id_autores.push(false);
                }
                ;
            }
            value.id_autores = id_autores;
        }
        else if (metadata.type == 'custom') {
            const existeArchivo = await this.libroRepository.existsBy({
                caratula: value.originalname,
            });
            if (existeArchivo) {
                throw new common_1.BadRequestException(`Ya existe caratula con este nombre "${value.originalname}"`);
            }
        }
        return value;
    }
};
exports.ValidationCreateProductsPipe = ValidationCreateProductsPipe;
exports.ValidationCreateProductsPipe = ValidationCreateProductsPipe = __decorate([
    __param(0, (0, typeorm_1.InjectRepository)(libro_1.Libro)),
    __param(1, (0, typeorm_1.InjectRepository)(idioma_libro_1.IdiomaLibro)),
    __param(2, (0, typeorm_1.InjectRepository)(encuadernacion_1.Encuadernacion)),
    __param(3, (0, typeorm_1.InjectRepository)(editorial_1.Editorial)),
    __param(4, (0, typeorm_1.InjectRepository)(genero_1.Genero)),
    __param(5, (0, typeorm_1.InjectRepository)(autor_1.Autor)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], ValidationCreateProductsPipe);
//# sourceMappingURL=validation-create-products.pipe.js.map