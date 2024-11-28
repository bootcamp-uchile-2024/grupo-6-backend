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
exports.ValidationGetProductsPipe = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const libro_1 = require("../../orm/entity/libro");
const typeorm_2 = require("typeorm");
let ValidationGetProductsPipe = class ValidationGetProductsPipe {
    constructor(libroRepository) {
        this.libroRepository = libroRepository;
    }
    async transform(value, metadata) {
        const existeLibro = await this.libroRepository.existsBy({
            isbn: value
        });
        if (!existeLibro) {
            throw new common_1.NotFoundException(`No existe libro con ISBN: ${value}`);
        }
        return value;
    }
};
exports.ValidationGetProductsPipe = ValidationGetProductsPipe;
exports.ValidationGetProductsPipe = ValidationGetProductsPipe = __decorate([
    __param(0, (0, typeorm_1.InjectRepository)(libro_1.Libro)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ValidationGetProductsPipe);
//# sourceMappingURL=validation-get-product.pipe.js.map