"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LibroMapper = void 0;
const get_product_dto_1 = require("../dto/get-product.dto");
const product_entity_1 = require("../entities/product.entity");
const generoEnum_1 = require("../entities/generoEnum");
const get_filtered_products_dto_1 = require("../dto/get-filtered-products.dto");
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
        return new get_product_dto_1.GetProductDto(product);
    }
    static entityListToDtoList(entityList) {
        return entityList.map((e) => LibroMapper.entityToDto(e));
    }
    static entityToDtoPaginacion(productos, totalProductos, cantidad, pagina) {
        let outputDto = new get_filtered_products_dto_1.GetFilteredProductsDto();
        outputDto.totalProductos = totalProductos;
        outputDto.totalPaginas = Math.ceil(totalProductos / cantidad);
        outputDto.nroPagina = pagina;
        outputDto.productos = productos;
        return outputDto;
    }
}
exports.LibroMapper = LibroMapper;
//# sourceMappingURL=libro.mapper.js.map