"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LibroMapper = void 0;
const product_dto_1 = require("../dto/product.dto");
const product_entity_1 = require("../entities/product.entity");
const generoEnum_1 = require("../entities/generoEnum");
class LibroMapper {
    static entityToDto(entity) {
        const generoValues = Object.values(generoEnum_1.GeneroEnum);
        const generos = entity.generos.map((item) => {
            return generoValues.find((enumVal) => enumVal === item.descripcion);
        });
        const autores = entity.autores.map(autor => autor.nombre);
        const idioma = entity.idiomaLibro.descripcion;
        const encuadernacion = entity.encuadernacion.descripcion;
        const product = new product_entity_1.Product(entity.isbn, entity.nombre, autores, entity.stock_libro, entity.precio, generos, entity.editorial.descripcion, idioma, encuadernacion, entity.agno_publicacion, entity.numero_paginas, entity.descuento, entity.caratula, entity.dimensiones, entity.codigo_barra, entity.resumen);
        return new product_dto_1.ProductDTO(product);
    }
    static entityListToDtoList(entityList) {
        return entityList.map((e) => LibroMapper.entityToDto(e));
    }
}
exports.LibroMapper = LibroMapper;
//# sourceMappingURL=libro.mapper.js.map