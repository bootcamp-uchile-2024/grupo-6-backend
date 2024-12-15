import { Libro } from "src/orm/entity/libro";
import { Resena } from "src/orm/entity/resena";
import { GetReviewDto } from "src/reviews/dto/get-review.dto";
import { ResenaMapper } from "src/reviews/mappers/review.mapper";
import { CreateValidatedProductDto } from "../dto/create-validated-product.dto";
import { GetFilteredProductsDto } from "../dto/get-filtered-products.dto";
import { GetProductDto } from "../dto/get-product.dto";
import { EncuadernacionEnum } from "../entities/encuadernacionEnum";
import { Idioma } from "../entities/idioma";

export class LibroMapper {
    static dtoToEntity(
        dto: CreateValidatedProductDto,
    ): Libro {
        const entity = new Libro();
        const initial_resena: Resena[] = [];
        const initial_rating: number = 0;
        const hoy = new Date();
        const fecha_hoy = `${hoy.getFullYear()}-${(hoy.getMonth() + 1).toString().padStart(2, '0')}-${hoy.getDate().toString().padStart(2, '0')}`;

        entity.isbn = dto.isbn;
        entity.nombre = dto.nombre;
        entity.id_autor = dto.id_autor;
        entity.stock_libro = dto.stockLibro;
        entity.precio = dto.precio;
        entity.rating = initial_rating;
        entity.id_editorial = dto.id_editorial;
        entity.id_idioma = dto.id_idioma;
        entity.id_encuadernacion = dto.id_encuadernacion;
        entity.agno_publicacion = dto.agnoPublicacion;
        entity.numero_paginas = dto.numeroPaginas;
        entity.descuento = dto.descuento;
        entity.dimensiones = dto.dimensiones;
        entity.codigo_barra = dto.codigoBarra;
        entity.caratula = dto.caratula;
        entity.resumen = dto.resumen;
        entity.fecha_creacion = fecha_hoy;
        entity.destacado = Boolean(dto.destacado);
        entity.habilitado = true;
        entity.resena = initial_resena;

        return entity;
    }

    static entityToDto(entity: Libro): GetProductDto{

        const dto = new GetProductDto();
        const caratula_server: string = `/cover/${entity.caratula}`;

        if (entity.generos.length > 0){
            console.log(entity.generos)
            dto.genero = entity.generos.map((item) => item.descripcion );
        }
        if (entity.idiomaLibro){
            dto.idioma = entity.idiomaLibro.descripcion as Idioma;
        }
        if (entity.encuadernacion){
            dto.encuadernacion = entity.encuadernacion.descripcion as unknown as EncuadernacionEnum
        }
        let resenas: GetReviewDto[] = [];
        if (entity.resena){
            resenas = entity.resena.map((resena) => ResenaMapper.entityToGetDto(resena));
        }
        
        dto.isbn = entity.isbn;
        dto.nombre = entity.nombre;
        entity.autor && (dto.autor = entity.autor.nombre);
        dto.stockLibro = entity.stock_libro;
        dto.precio = entity.precio;
        dto.rating = entity.rating;
        entity.editorial && (dto.editorial = entity.editorial.descripcion);
        entity.agno_publicacion && (dto.agnoPublicacion = entity.agno_publicacion);
        entity.numero_paginas && (dto.numeroPaginas = entity.numero_paginas);
        dto.descuento = entity.descuento;
        dto.dimensiones = entity.dimensiones;
        dto.codigoBarra = entity.codigo_barra;
        dto.caratula = caratula_server;
        dto.resumen = entity.resumen;
        resenas && (dto.resenas = resenas);
        dto.habilitado = entity.habilitado;
        dto.fechaCreacion = entity.fecha_creacion;
        dto.destacado = entity.destacado;
        
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

    static entityToCatalogDto(entity: Libro): GetProductDto{

        const dto = new GetProductDto();

        if (entity.generos){
            dto.genero = entity.generos.map((item) => item.descripcion );
        }
        if (entity.idiomaLibro){
            dto.idioma = entity.idiomaLibro.descripcion as Idioma;
        }
        if (entity.encuadernacion){
            dto.encuadernacion = entity.encuadernacion.descripcion as unknown as EncuadernacionEnum
        }
        const caratula_server: string = `/cover/${entity.caratula}`;
        
        dto.isbn = entity.isbn;
        dto.nombre = entity.nombre;
        entity.autor && (dto.autor = entity.autor.nombre);
        dto.stockLibro = entity.stock_libro;
        dto.precio = entity.precio;
        dto.rating = entity.rating;
        entity.editorial && (dto.editorial = entity.editorial.descripcion);
        entity.agno_publicacion && (dto.agnoPublicacion = entity.agno_publicacion);
        entity.numero_paginas && (dto.numeroPaginas = entity.numero_paginas);
        dto.descuento = entity.descuento;
        dto.dimensiones = entity.dimensiones;
        dto.caratula = caratula_server;
        dto.resumen = entity.resumen;
        dto.destacado = entity.destacado;
        
        return dto;
    }

    static entityListToCatalogDtoList(entityList: Libro[]): GetProductDto[] {
        return entityList.map((e) => LibroMapper.entityToCatalogDto(e));
    }

}