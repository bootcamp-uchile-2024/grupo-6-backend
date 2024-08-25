import { Controller, Get, Post, Body, Patch, Param, Delete, Res, Query } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Genero } from './entities/genero';
import { Encuadernacion } from './entities/encuadernacion';
import { Idioma } from './entities/idioma';
import { Response } from 'express';
import { ApiParam, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  // @Post()
  // create(@Body() createProductDto: CreateProductDto) {
  //   return this.productsService.create(createProductDto);
  // }

  @Get()
  nombreEpica() {
    return this.productsService.nombreEpica();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.productsService.findOne(+id);
  // }


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
  @ApiQuery({ name: 'genero', description: 'Genero del libro. Puede filtrarse con más de uno', required: false, enum: Genero})
  @ApiQuery({ name: 'editorial', description: 'Editorial del libro. Puede filtrarse con más de uno', required: false, example: 'Lumen'})
  @ApiQuery({ name: 'idioma', description: 'Idioma del libro. Puede filtrarse con más de uno', required: false, enum: Idioma})
  @ApiQuery({ name: 'isbn', description: 'Código ISBN del libro', required: false, example: '9789585581616'})
  @ApiQuery({ name: 'encuadernacion', description: 'Encuadernación del libro', required: false, enum: Encuadernacion})
  @ApiQuery({ name: 'agnoPublicacionMin', description: 'Año mínimo de publicación del libro', required: false, example: 2010})
  @ApiQuery({ name: 'agnoPublicacionMax', description: 'Año máximo de publicación del libro', required: false, example: 2024})
  @ApiResponse({status: 200, description: 'Solicitud generada correctamente'})
  @ApiResponse({status: 404, description: 'No existen productos que cumplan la solicitud'})
  @Get('catalog')
  getFilteredProducts(
    @Res() response: Response,
    @Query('priceMin') priceMin?: number,
    @Query('priceMax') priceMax?: number,
    @Query('limit') limit = 10,
    @Query('offset') offset = 0,
    @Query('sortBy') sortBy?: string,
    @Query('autor') autor?: string,
    @Query('nombre') nombre?: string,
    @Query('rating') rating?: number,
    @Query('genero') genero?: string | string[],
    @Query('editorial') editorial?: string | string[],
    @Query('idioma') idioma?: string | string[],
    @Query('isbn') isbn?: string,
    @Query('encuadernacion') encuadernacion?: Encuadernacion,
    @Query('agnoPublicacionMin') agnoPublicacionMin?: number,
    @Query('agnoPublicacionMax') agnoPublicacionMax?: number,
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
      genero: typeof genero === 'string' ? [genero] : genero, 
      editorial: typeof editorial === 'string' ? [editorial] : editorial, 
      idioma: typeof idioma === 'string' ? [idioma] : idioma, 
      isbn, 
      encuadernacion, 
      agnoPublicacionMin, 
      agnoPublicacionMax
    };

    try {
      const products = this.productsService.getFilteredProducts(filters);
      response.status(200).send(products);

    } catch(error){
      response.status(error.status).send(error.message);
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
  @ApiQuery({ name: 'genero', description: 'Genero del libro. Puede filtrarse con más de uno', required: false, enum: Genero})
  @ApiQuery({ name: 'editorial', description: 'Editorial del libro. Puede filtrarse con más de uno', required: false, example: 'Lumen'})
  @ApiQuery({ name: 'idioma', description: 'Idioma del libro. Puede filtrarse con más de uno', required: false, enum: Idioma})
  @ApiQuery({ name: 'encuadernacion', description: 'Encuadernación del libro', required: false, enum: Encuadernacion})
  @ApiQuery({ name: 'agnoPublicacionMin', description: 'Año mínimo de publicación del libro', required: false, example: 2010})
  @ApiQuery({ name: 'agnoPublicacionMax', description: 'Año máximo de publicación del libro', required: false, example: 2024})
  @ApiResponse({status: 200, description: 'Solicitud generada correctamente'})
  @ApiResponse({status: 404, description: 'No existen productos que cumplan la solicitud'})
  @Get('search')
  getSearchedProducts(
    @Res() response: Response,
    @Query('query') query: string,
    @Query('priceMin') priceMin?: number,
    @Query('priceMax') priceMax?: number,
    @Query('limit') limit = 10,
    @Query('offset') offset = 0,
    @Query('sortBy') sortBy?: string,
    @Query('autor') autor?: string,
    @Query('rating') rating?: number,
    @Query('genero') genero?: string | string[],
    @Query('editorial') editorial?: string | string[],
    @Query('idioma') idioma?: string | string[],
    @Query('encuadernacion') encuadernacion?: Encuadernacion,
    @Query('agnoPublicacionMin') agnoPublicacionMin?: number,
    @Query('agnoPublicacionMax') agnoPublicacionMax?: number,
  ){
    const filters = {
      priceMin, 
      priceMax, 
      limit, 
      offset, 
      sortBy, 
      autor, 
      rating, 
      genero: typeof genero === 'string' ? [genero] : genero, 
      editorial: typeof editorial === 'string' ? [editorial] : editorial, 
      idioma: typeof idioma === 'string' ? [idioma] : idioma, 
      encuadernacion, 
      agnoPublicacionMin, 
      agnoPublicacionMax
    };

    try {
      const products = this.productsService.getSearchedProductos(query, filters);
      response.status(200).send(products);

    } catch(error){
      response.status(error.status).send(error.message);
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
