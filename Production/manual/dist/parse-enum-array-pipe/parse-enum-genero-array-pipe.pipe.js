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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParseEnumGeneroArrayPipe = void 0;
const common_1 = require("@nestjs/common");
const generoEnum_1 = require("../products/entities/generoEnum");
let ParseEnumGeneroArrayPipe = class ParseEnumGeneroArrayPipe {
    constructor(GeneroEnum) {
        this.GeneroEnum = GeneroEnum;
    }
    transform(value) {
        if (value !== undefined) {
            if (!Array.isArray(value) && typeof value != 'string') {
                throw new common_1.BadRequestException('Se espera un array de strings');
            }
            const generos = Array.isArray(value) ? value : [value];
            const generoValues = Object.values(generoEnum_1.GeneroEnum);
            return generos.map((item) => {
                const transformedItem = generoValues.find((enumVal) => enumVal === item);
                if (!transformedItem) {
                    throw new common_1.BadRequestException(`${item} no es un genero válido`);
                }
                return item;
            });
        }
    }
};
exports.ParseEnumGeneroArrayPipe = ParseEnumGeneroArrayPipe;
exports.ParseEnumGeneroArrayPipe = ParseEnumGeneroArrayPipe = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [Object])
], ParseEnumGeneroArrayPipe);
//# sourceMappingURL=parse-enum-genero-array-pipe.pipe.js.map