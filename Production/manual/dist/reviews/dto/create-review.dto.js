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
exports.CreateReviewDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateReviewDto {
}
exports.CreateReviewDto = CreateReviewDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Muy buen libro!',
        description: 'Comentario que un usuario asigna a un libro especifico.',
        required: false,
        nullable: true
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: 'Introducir un formato de comentario tipo string correcto.' }),
    (0, class_validator_1.MaxLength)(1000, { message: "El comentario ingresado necesita contener menos de 1000 caracteres." }),
    __metadata("design:type", String)
], CreateReviewDto.prototype, "comentario", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 4,
        description: 'Rating que un usuario asigna a un libro especifico, minimo 1 y maximo 5.',
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1),
    (0, class_validator_1.Max)(5),
    (0, class_validator_1.IsNotEmpty)({ message: 'Favor introducir un valor.' }),
    __metadata("design:type", Number)
], CreateReviewDto.prototype, "rating", void 0);
//# sourceMappingURL=create-review.dto.js.map