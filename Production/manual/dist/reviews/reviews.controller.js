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
exports.ReviewsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const create_review_dto_1 = require("./dto/create-review.dto");
const reviews_service_1 = require("./reviews.service");
let ReviewsController = class ReviewsController {
    constructor(reviewsService) {
        this.reviewsService = reviewsService;
    }
    async createResena(idUsuario, idLibro, createReviewDto) {
        return await this.reviewsService.createResena(idUsuario, idLibro, createReviewDto);
    }
    async findResenasUsuario(idUsuario) {
        return this.reviewsService.findResenasUsuario(idUsuario);
    }
    async findResenasLibro(idLibro) {
        return this.reviewsService.findResenasLibro(idLibro);
    }
};
exports.ReviewsController = ReviewsController;
__decorate([
    (0, swagger_1.ApiTags)('reviews'),
    (0, swagger_1.ApiQuery)({
        name: 'idUsuario',
        description: 'ID del usuario que va a escribir la resena.',
        required: true,
    }),
    (0, swagger_1.ApiQuery)({
        name: 'idLibro',
        description: 'ID del libro al cual se le va a realizar la resena',
        required: true,
    }),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Query)('idUsuario', new common_1.ParseIntPipe({ errorHttpStatusCode: 400 }))),
    __param(1, (0, common_1.Query)('idLibro')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, create_review_dto_1.CreateReviewDto]),
    __metadata("design:returntype", Promise)
], ReviewsController.prototype, "createResena", null);
__decorate([
    (0, swagger_1.ApiTags)('reviews'),
    (0, common_1.Get)('/user/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ReviewsController.prototype, "findResenasUsuario", null);
__decorate([
    (0, swagger_1.ApiTags)('reviews'),
    (0, common_1.Get)('product/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ReviewsController.prototype, "findResenasLibro", null);
exports.ReviewsController = ReviewsController = __decorate([
    (0, common_1.Controller)('reviews'),
    __metadata("design:paramtypes", [reviews_service_1.ReviewsService])
], ReviewsController);
//# sourceMappingURL=reviews.controller.js.map