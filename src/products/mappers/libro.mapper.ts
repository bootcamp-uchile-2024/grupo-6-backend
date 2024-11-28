import { Libro } from "src/orm/entity/libro";
import { Resena } from "src/orm/entity/resena";
import { CreateValidatedProductDto } from "../dto/create-validated-product.dto";
import { GetFilteredProductsDto } from "../dto/get-filtered-products.dto";
import { GetProductDto } from "../dto/get-product.dto";
import { EncuadernacionEnum } from "../entities/encuadernacionEnum";
import { GeneroEnum } from "../entities/generoEnum";
import { Idioma } from "../entities/idioma";
import { Product } from "../entities/product.entity";

export class LibroMapper {
    static dtoToEntity(
        dto: CreateValidatedProductDto,
    ): Libro {
        const entity = new Libro();
        const initial_resena: Resena[] = [];
        const initial_rating: number = 0;

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

    static entityToDto(entity: Libro): GetProductDto{

        const dto = new GetProductDto();

        const generoValues = Object.values(GeneroEnum);
        const generos: GeneroEnum[] = entity.generos.map((item) => {
            return generoValues.find(
              (enumVal) => enumVal === item.descripcion,
            );
          });

        const autores: string[] = entity.autores.map(autor => autor.nombre)
        const idioma: Idioma = entity.idiomaLibro.descripcion as Idioma;
        const encuadernacion: EncuadernacionEnum = entity.encuadernacion.descripcion as unknown as EncuadernacionEnum;
        const caratula_server: string = `/cover/${entity.caratula}`;
        
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

    static entityListToDtoList(entityList: Libro[]): GetProductDto[] {
        return entityList.map((e) => LibroMapper.entityToDto(e));
    }

    static entityToDtoPaginacion(
        productos: GetProductDto[], 
        totalProductos: number, 
        cantidad: number,
        pagina: number,
    ): GetFilteredProductsDto{

        let outputDto: GetFilteredProductsDto = new GetFilteredProductsDto();

        outputDto.totalProductos = totalProductos;
        outputDto.totalPaginas = Math.ceil( totalProductos /  cantidad );
        outputDto.nroPagina = pagina;
        outputDto.productos = productos;
    
        return outputDto;
    }
}