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
exports.ReviewsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const libro_1 = require("../orm/entity/libro");
const resena_1 = require("../orm/entity/resena");
const usuario_1 = require("../orm/entity/usuario");
const typeorm_2 = require("typeorm");
const review_mapper_1 = require("./mappers/review.mapper");
let ReviewsService = class ReviewsService {
    constructor(resenaRepository, usuarioRepository, libroRepository) {
        this.resenaRepository = resenaRepository;
        this.usuarioRepository = usuarioRepository;
        this.libroRepository = libroRepository;
    }
    async createResena(idUsuario, idLibro, createReviewDto) {
        let existeUsuario = await this.usuarioRepository.existsBy({
            id: +idUsuario
        });
        if (!existeUsuario) {
            throw new common_1.BadRequestException('No existe el usuario con el id ingresado.');
        }
        let existeLibro = await this.libroRepository.existsBy({
            id: +idLibro
        });
        if (!existeLibro) {
            throw new common_1.BadRequestException('No existe el libro con el ID ingresado.');
        }
        let resena = review_mapper_1.ResenaMapper.dtoToEntity(+idUsuario, +idLibro, createReviewDto);
        await this.resenaRepository.save(resena);
        return createReviewDto;
    }
    async findResenasUsuario(idUsuario) {
        let existeUsuario = await this.usuarioRepository.existsBy({
            id: +idUsuario
        });
        if (!existeUsuario) {
            throw new common_1.BadRequestException('No existe el usuario con el id ingresado.');
        }
        let resenasUsuario = await this.resenaRepository.find({
            select: {
                id: true,
                rating: true,
                comentario: true,
                fecha: true,
                libro: {
                    nombre: true
                }
            },
            where: {
                id_usuario: +idUsuario
            },
            relations: {
                libro: true
            }
        });
        if (resenasUsuario == undefined || resenasUsuario == null || resenasUsuario.length == 0) {
            throw new common_1.BadRequestException('El usuario no ha realizado ninguna resena todavia.');
        }
        return resenasUsuario;
    }
    async findResenasLibro(idLibro) {
        let existeLibro = await this.libroRepository.existsBy({
            id: +idLibro
        });
        if (!existeLibro) {
            throw new common_1.BadRequestException('No existe el libro con el ID ingresado.');
        }
        let resenasLibro = await this.resenaRepository.find({
            select: {
                id: true,
                rating: true,
                comentario: true,
                fecha: true,
                usuario: {
                    nombre: true,
                    segundo_nombre: true,
                    apellido_paterno: true,
                    apellido_materno: true,
                }
            },
            where: {
                id_libro: +idLibro
            },
            relations: {
                usuario: true
            }
        });
        if (resenasLibro == undefined || resenasLibro == null || resenasLibro.length == 0) {
            throw new common_1.BadRequestException('El libro no ha recibido ninguna resena todavia.');
        }
        return resenasLibro;
    }
};
exports.ReviewsService = ReviewsService;
exports.ReviewsService = ReviewsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(resena_1.Resena)),
    __param(1, (0, typeorm_1.InjectRepository)(usuario_1.Usuario)),
    __param(2, (0, typeorm_1.InjectRepository)(libro_1.Libro)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], ReviewsService);
//# sourceMappingURL=reviews.service.js.map