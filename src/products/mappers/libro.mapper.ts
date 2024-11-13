import { Libro } from "src/orm/entity/libro";
import { GetProductDto } from "../dto/get-product.dto";
import { Product } from "../entities/product.entity";
import { GeneroEnum } from "../entities/generoEnum";
import { Idioma } from "../entities/idioma";
import { Encuadernacion } from "../entities/encuadernacion";
import { GetFilteredProductsDto } from "../dto/get-filtered-products.dto";

export class LibroMapper {

    static entityToDto(entity: Libro): GetProductDto{
        const generoValues = Object.values(GeneroEnum);
        const generos: GeneroEnum[] = entity.generos.map((item) => {
            return generoValues.find(
              (enumVal) => enumVal === item.descripcion,
            );
          });

        const autores: string[] = entity.autores.map(autor => autor.nombre)
        const idioma: Idioma = entity.idiomaLibro.descripcion as Idioma;
        const encuadernacion: Encuadernacion = entity.encuadernacion.descripcion as unknown as Encuadernacion;
        
        const product = new Product(
            entity.isbn,
            entity.nombre,
            autores,
            entity.stock_libro,
            entity.precio,
            generos,
            entity.editorial.descripcion,
            idioma,
            encuadernacion,
            entity.agno_publicacion,
            entity.numero_paginas,
            entity.descuento,
            entity.caratula,
            entity.dimensiones,
            entity.codigo_barra,
            entity.resumen
        );
        
        return new GetProductDto(product); // NOTE! Corregir esto en el futuro
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