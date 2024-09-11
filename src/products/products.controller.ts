import { Controller, Get, Post, Body, Patch, Param, Delete, Res, Query, HttpException, ParseIntPipe, ParseEnumPipe, ParseArrayPipe } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Response } from 'express';
import { Genero } from './entities/genero';
import { Encuadernacion } from './entities/encuadernacion';
import { Idioma } from './entities/idioma';
import { ApiParam, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Product } from './entities/product.entity';
import { ParseEnumGeneroArrayPipePipe } from 'src/parse-enum-array-pipe/parse-enum-genero-array-pipe.pipe'

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}
  
  @ApiTags('Products')
  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  // HU Filtro de productos
  @ApiTags('Products')
  @ApiQuery({ name: 'priceMin', description: 'Filtro con precio mínimo', required: false})
  @ApiQuery({ name: 'priceMax', description: 'Filtro con precio máximo', required: false})
  @ApiQuery({ name: 'limit', description: 'Número máximo de productos a entregar. Valor por defecto = 10', required: false})
  @ApiQuery({ name: 'offset', description: 'Desde qué posición empezar a devolver productos. Valor por defecto = 0', required: false})
  @ApiQuery({ name: 'sortBy', description: 'Nombre de la propiedad sobre la cual filtrar', required: false, example: 'precio'})
  @ApiQuery({ name: 'autor', description: 'Nombre del autor del libro', required: false, example: 'Gabriel Garcia Marquez'})
  @ApiQuery({ name: 'nombre', description: 'Título del libro', required: false, example: 'Cien años de soledad'})
  @ApiQuery({ name: 'rating', description: 'Rating del libro. Valor entre 0 y 5', required: false})
  @ApiQuery({ name: 'genero', description: 'Genero del libro. Puede filtrarse con más de uno', required: false, enum: Genero, isArray: true})
  @ApiQuery({ name: 'editorial', description: 'Editorial del libro. Puede filtrarse con más de uno. Indicarlos separados con coma', required: false, example: 'Lumen,Taurus'})
  @ApiQuery({ name: 'idioma', description: 'Idioma del libro. Puede filtrarse con más de uno', required: false, enum: Idioma, isArray: true})
  @ApiQuery({ name: 'isbn', description: 'Código ISBN del libro', required: false, example: '9789585581616'})
  @ApiQuery({ name: 'encuadernacion', description: 'Encuadernación del libro', required: false, enum: Encuadernacion})
  @ApiQuery({ name: 'agnoPublicacionMin', description: 'Año mínimo de publicación del libro', required: false, example: 2010})
  @ApiQuery({ name: 'agnoPublicacionMax', description: 'Año máximo de publicación del libro', required: false, example: 2024})
  @ApiResponse({status: 200, description: 'Solicitud generada correctamente'})
  @ApiResponse({status: 404, description: 'No existen productos que cumplan la solicitud'})
  @Get('catalog')
  getFilteredProducts(
    @Query('priceMin', new ParseIntPipe({ errorHttpStatusCode: 400, optional: true })) priceMin?: number,
    @Query('priceMax', new ParseIntPipe({ errorHttpStatusCode: 400, optional: true })) priceMax?: number,
    @Query('limit', new ParseIntPipe({ errorHttpStatusCode: 400, optional: true })) limit = 10, 
    @Query('offset', new ParseIntPipe({ errorHttpStatusCode: 400, optional: true })) offset = 0,
    @Query('sortBy') sortBy?: string,
    @Query('autor') autor?: string,
    @Query('nombre') nombre?: string,
    @Query('rating', new ParseIntPipe({ errorHttpStatusCode: 400, optional: true })) rating?: number,
    @Query('genero', new ParseEnumGeneroArrayPipePipe(Genero)) genero?: string | string[],
    @Query('editorial', new ParseArrayPipe({ items: String, separator: ',', optional: true, errorHttpStatusCode: 400})) editorial?: string | string[],
    @Query('idioma', new ParseArrayPipe({ items: String, separator: ',', optional: true, errorHttpStatusCode: 400})) idioma?: string | string[],
    @Query('isbn') isbn?: string,
    @Query('encuadernacion', new ParseEnumPipe(Encuadernacion, { optional: true })) encuadernacion?: Encuadernacion,
    @Query('agnoPublicacionMin', new ParseIntPipe({ errorHttpStatusCode: 400, optional: true })) agnoPublicacionMin?: number,
    @Query('agnoPublicacionMax', new ParseIntPipe({ errorHttpStatusCode: 400, optional: true })) agnoPublicacionMax?: number,
  ){
    
    const filters = {
      priceMin, 
      priceMax, 
      limit, 
      offset, 
      sortBy, 
      autor, 
      nombre, 
      rating, 
      genero, 
      editorial: typeof editorial === 'string' ? [editorial] : editorial, 
      idioma, 
      isbn, 
      encuadernacion, 
      agnoPublicacionMin, 
      agnoPublicacionMax
    };
    try {
      return this.productsService.getFilteredProducts(filters);
    } catch(error){
      throw new HttpException('Error al obtener categorias', 400);
    }

  }
  // HU Buscador de producto
  @ApiTags('Products')
  @ApiQuery({ name: 'query', description: 'Nombre, autor o ISBN de libro buscado'})
  @ApiQuery({ name: 'priceMin', description: 'Filtro con precio mínimo', required: false})
  @ApiQuery({ name: 'priceMax', description: 'Filtro con precio máximo', required: false})
  @ApiQuery({ name: 'limit', description: 'Número máximo de productos a entregar. Valor por defecto = 10', required: false})
  @ApiQuery({ name: 'offset', description: 'Desde qué posición empezar a devolver productos. Valor por defecto = 0', required: false})
  @ApiQuery({ name: 'sortBy', description: 'Nombre de la propiedad sobre la cual filtrar', required: false, example: 'precio'})
  @ApiQuery({ name: 'autor', description: 'Nombre del autor del libro', required: false, example: 'Gabriel Garcia Marquez'})
  @ApiQuery({ name: 'rating', description: 'Rating del libro. Valor entre 0 y 5', required: false})
  @ApiQuery({ name: 'genero', description: 'Genero del libro. Puede filtrarse con más de uno', required: false, enum: Genero, isArray: true})
  @ApiQuery({ name: 'editorial', description: 'Editorial del libro. Puede filtrarse con más de uno. Indicarlos separados con coma', required: false, example: 'Lumen,Taurus'})
  @ApiQuery({ name: 'idioma', description: 'Idioma del libro. Puede filtrarse con más de uno', required: false, enum: Idioma, isArray: true})
  @ApiQuery({ name: 'encuadernacion', description: 'Encuadernación del libro', required: false, enum: Encuadernacion})
  @ApiQuery({ name: 'agnoPublicacionMin', description: 'Año mínimo de publicación del libro', required: false, example: 2010})
  @ApiQuery({ name: 'agnoPublicacionMax', description: 'Año máximo de publicación del libro', required: false, example: 2024})
  @ApiResponse({status: 200, description: 'Solicitud generada correctamente'})
  @ApiResponse({status: 404, description: 'No existen productos que cumplan la solicitud'})
  @Get('search')
  getSearchedProducts(
    @Query('query') query: string,
    @Query('priceMin', new ParseIntPipe({ errorHttpStatusCode: 400, optional: true })) priceMin?: number,
    @Query('priceMax', new ParseIntPipe({ errorHttpStatusCode: 400, optional: true })) priceMax?: number,
    @Query('limit', new ParseIntPipe({ errorHttpStatusCode: 400, optional: true })) limit = 10, 
    @Query('offset', new ParseIntPipe({ errorHttpStatusCode: 400, optional: true })) offset = 0,
    @Query('sortBy') sortBy?: string,
    @Query('autor') autor?: string,
    @Query('rating', new ParseIntPipe({ errorHttpStatusCode: 400, optional: true })) rating?: number,
    @Query('genero', new ParseEnumGeneroArrayPipePipe(Genero)) genero?: string | string[],
    @Query('editorial', new ParseArrayPipe({ items: String, separator: ',', optional: true, errorHttpStatusCode: 400})) editorial?: string | string[],
    @Query('idioma', new ParseArrayPipe({ items: String, separator: ',', optional: true, errorHttpStatusCode: 400})) idioma?: string | string[],
    @Query('encuadernacion', new ParseEnumPipe(Encuadernacion, { optional: true })) encuadernacion?: Encuadernacion,
    @Query('agnoPublicacionMin', new ParseIntPipe({ errorHttpStatusCode: 400, optional: true })) agnoPublicacionMin?: number,
    @Query('agnoPublicacionMax', new ParseIntPipe({ errorHttpStatusCode: 400, optional: true })) agnoPublicacionMax?: number,
  ){
    console.log(typeof idioma)
    const filters = {
      priceMin, 
      priceMax, 
      limit, 
      offset, 
      sortBy, 
      autor, 
      rating, 
      genero, 
      editorial, 
      idioma, 
      encuadernacion, 
      agnoPublicacionMin, 
      agnoPublicacionMax
    };
    try {
      return this.productsService.getSearchedProductos(query, filters);
    } catch(error){
      throw new HttpException('No se ha encontrado ningún producto con estas características', 404);
    }
  }

  @ApiTags('Products')
  @ApiResponse({ status: 200, description: 'Este codigo se debe a que se pudo enviar el libro en base al isbn ingresado.' })
  @ApiResponse({ status: 404, description: 'Este codigo se debe a que no encuentra el isbn del libro.' })
  @Get('search/:isbn')
  findOne(@Param('isbn') isbn: string): Product {
    try{
      return this.productsService.findOne(isbn);
    } catch(error){
      throw new HttpException('Error al obtener el producto', 400);
    }
  }

  @ApiTags('Products')
  @ApiResponse({ status: 200, description: 'Se obtuvo la lista de generos de forma satisfactoria.' })
  @ApiResponse({ status: 400, description: 'Hubo un error al obtener la lista de generos.' })
  @Get('genres')
  getGenres( ){
    try {
      return this.productsService.getGenres();
      
    } catch(error){
      throw new HttpException('Error al obtener los géneros de libros', 400);
    }
  }



  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
  //   return this.productsService.update(+id, updateProductDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.productsService.remove(+id);
  // }
}
