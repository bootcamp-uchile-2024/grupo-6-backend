"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EquipoService = void 0;
const common_1 = require("@nestjs/common");
const equipo_entity_1 = require("./entities/equipo.entity");
const area_1 = require("./entities/area");
const ecommerce_1 = require("./entities/ecommerce");
let EquipoService = class EquipoService {
    constructor() {
        this.equipo = new equipo_entity_1.Equipo('13Design', [
            new area_1.Area('Diseño UX-UI', [
                'Yasna Cárdenas',
                'Vicente Naranjo',
                'Macarena Cerda',
                'Enzo Toledo',
                'Silvana Marín',
            ], 'Silvana Marín'),
            new area_1.Area('Frontend', [
                'Alexandra Pavez',
                'Antonia Horta',
                'Daniela Gajardo',
                'Tatiana Martínez',
            ], 'Alexandra Pávez'),
            new area_1.Area('Backend', ['José Martínez', 'Sebastián Flores', 'Nicole Carvajal'], 'José Martínez'),
        ]);
        this.ecommerce = new ecommerce_1.Ecommerce('Paginas Selectas', 'Venta de libros, mediante una experiencia de recomendaciones personalizada basada en los gustos del usuario.', 'E-commerce tipo B2C de venta de libros.', 'Ofrecer una experiencia de compra personalizada de una amplia variedad de libros, permitiendo a los usuarios con hábitos de lectura establecidos o en proceso de retomarlos descubrir y adquirir fácilmente a un extenso catálogo literario, fomentando una comunidad de lectores para compartir sus intereses.', [
            '1. Implementar un sistema de recomendaciones personalizadas de catalógos de libros basado en las preferencias de los usuarios.',
            '2. Desarrollar y ofrecer mystery boxes mensuales que contengan una selección de libros y artículos relacionados a la lectura, separada por generos literarios y además de ofrecer suscripciones  mensuales para cursos y club de lectura, entre otros servicios.',
        ]);
    }
    create(createEquipoDto) {
        return 'This action adds a new equipo';
    }
    getEquipo() {
        return this.equipo;
    }
    getAreas() {
        return this.equipo.areas;
    }
    getEcommerceInfo() {
        return this.ecommerce;
    }
    findArea(area) {
        return this.equipo.areas.find((areas) => areas.nombre == area);
    }
    findOne(id) {
        return `This action returns a #${id} equipo`;
    }
    update(id, updateEquipoDto) {
        return `This action updates a #${id} equipo`;
    }
    remove(id) {
        return `This action removes a #${id} equipo`;
    }
};
exports.EquipoService = EquipoService;
exports.EquipoService = EquipoService = __decorate([
    (0, common_1.Injectable)()
], EquipoService);
//# sourceMappingURL=equipo.service.js.map