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
exports.ParseEnumIdiomaArrayPipe = void 0;
const common_1 = require("@nestjs/common");
const idioma_1 = require("../products/entities/idioma");
let ParseEnumIdiomaArrayPipe = class ParseEnumIdiomaArrayPipe {
    constructor(Idioma) {
        this.Idioma = Idioma;
    }
    transform(value) {
        if (value !== undefined) {
            let values = value.replace(' ', '').split(",").filter((v) => v !== "");
            const idiomaValues = Object.values(idioma_1.Idioma);
            return values.map((item) => {
                const transformedItem = idiomaValues.find((enumVal) => enumVal === item);
                if (!transformedItem) {
                    throw new common_1.BadRequestException(`${item} no es un idioma válido`);
                }
                return item;
            });
        }
    }
};
exports.ParseEnumIdiomaArrayPipe = ParseEnumIdiomaArrayPipe;
exports.ParseEnumIdiomaArrayPipe = ParseEnumIdiomaArrayPipe = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [Object])
], ParseEnumIdiomaArrayPipe);
//# sourceMappingURL=parse-enum-idioma-array-pipe.js.map