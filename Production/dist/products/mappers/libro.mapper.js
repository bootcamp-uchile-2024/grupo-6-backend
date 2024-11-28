"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LibroMapper = void 0;
const libro_1 = require("../../orm/entity/libro");
const get_filtered_products_dto_1 = require("../dto/get-filtered-products.dto");
const get_product_dto_1 = require("../dto/get-product.dto");
const generoEnum_1 = require("../entities/generoEnum");
class LibroMapper {
    static dtoToEntity(dto) {
        const entity = new libro_1.Libro();
        const initial_resena = [];
        const initial_rating = 0;
        entity.isbn = dto.isbn;
        entity.id_idioma = dto.id_idioma;
        entity.id_encuadernacion = dto.id_encuadernacion;
        entity.nombre = dto.nombre;
        entity.stock_libro = dto.stockLibro;
        entity.precio = dto.precio;
        entity.rating = initial_rating;
        entity.id_editorial = dto.id_editorial;
        entity.agno_publicacion = dto.agnoPublicacion;
        entity.numero_paginas = dto.numeroPaginas;
        entity.descuento = dto.descuento;
        entity.caratula = dto.caratula;
        entity.dimensiones = dto.dimensiones;
        entity.codigo_barra = dto.ean;
        entity.resumen = dto.resumen;
        entity.resena = initial_resena;
        return entity;
    }
    static entityToDto(entity) {
        const dto = new get_product_dto_1.GetProductDto();
        const generoValues = Object.values(generoEnum_1.GeneroEnum);
        const generos = entity.generos.map((item) => {
            return generoValues.find((enumVal) => enumVal === item.descripcion);
        });
        const autores = entity.autores.map(autor => autor.nombre);
        const idioma = entity.idiomaLibro.descripcion;
        const encuadernacion = entity.encuadernacion.descripcion;
        const caratula_server = `/cover/${entity.caratula}`;
        dto.id = entity.id;
        dto.isbn = entity.isbn;
        dto.nombre = entity.nombre;
        dto.autor = autores;
        dto.stockLibro = entity.stock_libro;
        dto.precio = entity.precio;
        dto.rating = entity.rating;
        dto.genero = generos;
        dto.editorial = entity.editorial.descripcion;
        dto.idioma = idioma;
        dto.encuadernacion = encuadernacion;
        dto.agnoPublicacion = entity.agno_publicacion;
        dto.numeroPaginas = entity.numero_paginas;
        dto.resenas = entity.resena;
        dto.descuento = entity.descuento;
        dto.caratula = caratula_server;
        dto.dimensiones = entity.dimensiones;
        dto.ean = entity.codigo_barra;
        dto.resumen = entity.resumen;
        return dto;
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