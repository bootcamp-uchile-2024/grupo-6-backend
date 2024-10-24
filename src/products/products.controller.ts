import { Body, Controller, Get, HttpException, Param, ParseArrayPipe, ParseEnumPipe, ParseIntPipe, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ParseEnumGeneroArrayPipe } from 'src/parse-enum-array-pipe/parse-enum-genero-array-pipe.pipe';
import { ParseEnumIdiomaArrayPipe } from 'src/parse-enum-array-pipe/parse-enum-idioma-array-pipe';
import { CreateProductDto } from './dto/create-product.dto';
import { proConexDTO } from './dto/proConexDTO';
import { ProductDTO } from './dto/product.dto';
import { Encuadernacion } from './entities/encuadernacion';
import { GeneroEnum } from './entities/generoEnum';
import { Idioma } from './entities/idioma';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @ApiTags('Products')
  @ApiResponse({ 
    status: 200, 
    description: 'Creación de producto exitosa', 
    type: ProductDTO
  })
  @ApiResponse({
    status: 404,
    description: 'Error al crear producto. Revisar datos ingresados',
  })
  @UsePipes( new ValidationPipe())
  @Post()
  create(@Body() createProductDto: CreateProductDto): CreateProductDto {
    return this.productsService.create(createProductDto);
  }

  // HU Filtro de productos
  @ApiTags('Products')
  @ApiQuery({
    name: 'priceMin',
    description: 'Filtro con precio mínimo',
    required: false,
  })
  @ApiQuery({
    name: 'priceMax',
    description: 'Filtro con precio máximo',
    required: false,
  })
  @ApiQuery({
    name: 'limit',
    description: 'Número máximo de productos a entregar. Valor por defecto = 10',
    required: false,
  })
  @ApiQuery({
    name: 'offset',
    description: 'Desde qué posición empezar a devolver productos. Valor por defecto = 0',
    required: false,
  })
  @ApiQuery({
    name: 'sortBy',
    description: 'Nombre de la propiedad sobre la cual filtrar',
    required: false,
    example: 'precio',
  })
  @ApiQuery({
    name: 'autor',
    description: 'Nombre del autor del libro',
    required: false,
    example: 'Gabriel Garcia Marquez',
  })
  @ApiQuery({
    name: 'nombre',
    description: 'Título del libro',
    required: false,
    example: 'Cien años de soledad',
  })
  @ApiQuery({
    name: 'rating',
    description: 'Rating del libro. Valor entre 0 y 5',
    required: false,
  })
  @ApiQuery({
    name: 'genero',
    description: 'Genero del libro. Puede filtrarse con más de uno',
    required: false,
    enum: GeneroEnum,
    isArray: true,
  })
  @ApiQuery({
    name: 'editorial',
    description: 'Editorial del libro. Puede filtrarse con más de uno. Indicarlos separados con coma',
    required: false,
    example: 'Lumen,Taurus',
  })
  @ApiQuery({
    name: 'idioma',
    description: 'Idioma del libro. Puede filtrarse con más de uno',
    required: false,
    enum: Idioma,
    isArray: true,
  })
  @ApiQuery({
    name: 'isbn',
    description: 'Código ISBN del libro',
    required: false,
    example: '9789585581616',
  })
  @ApiQuery({
    name: 'encuadernacion',
    description: 'Encuadernación del libro',
    required: false,
    enum: Encuadernacion,
  })
  @ApiQuery({
    name: 'agnoPublicacionMin',
    description: 'Año mínimo de publicación del libro',
    required: false,
    example: 2010,
  })
  @ApiQuery({
    name: 'agnoPublicacionMax',
    description: 'Año máximo de publicación del libro',
    required: false,
    example: 2024,
  })
  @ApiResponse({ 
    status: 200, 
    description: 'Solicitud generada correctamente', 
    type: ProductDTO,
    isArray: true
  })
  @ApiResponse({
    status: 404,
    description: 'No existen productos que cumplan la solicitud',
  })
  @Get('catalog')
  async getFilteredProducts(
    @Query('priceMin', new ParseIntPipe({ errorHttpStatusCode: 400, optional: true }), ) priceMin?: number,
    @Query('priceMax', new ParseIntPipe({ errorHttpStatusCode: 400, optional: true }), ) priceMax?: number,
    @Query('limit', new ParseIntPipe({ errorHttpStatusCode: 400, optional: true }), ) limit = 10,
    @Query('offset', new ParseIntPipe({ errorHttpStatusCode: 400, optional: true }), ) offset = 0,
    @Query('sortBy') sortBy?: string,
    @Query('autor') autor?: string,
    @Query('nombre') nombre?: string,
    @Query('rating', new ParseIntPipe({ errorHttpStatusCode: 400, optional: true }), ) rating?: number,
    @Query('genero', new ParseEnumGeneroArrayPipe(GeneroEnum)) genero?: string | string[],
    @Query('editorial', new ParseArrayPipe({ items: String, separator: ',', optional: true, errorHttpStatusCode: 400, }), ) editorial?: string | string[],
    @Query('idioma', new ParseEnumIdiomaArrayPipe(Idioma)) idioma?: string | string[],
    @Query('isbn') isbn?: string,
    @Query('encuadernacion', new ParseEnumPipe(Encuadernacion, { optional: true }), ) encuadernacion?: Encuadernacion,
    @Query('agnoPublicacionMin', new ParseIntPipe({ errorHttpStatusCode: 400, optional: true }), ) agnoPublicacionMin?: number,
    @Query( 'agnoPublicacionMax', new ParseIntPipe({ errorHttpStatusCode: 400, optional: true }), ) agnoPublicacionMax?: number,
  ): Promise<ProductDTO[]> {
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
      agnoPublicacionMax,
    };
    try {
      return await this.productsService.getFilteredProducts(filters);
    } catch (error) {
      throw new HttpException('Error al obtener categorias', 400);
    }
  }


  // HU Buscador de producto
  @ApiTags('Products')
  @ApiQuery({
    name: 'query',
    description: 'Nombre, autor o ISBN de libro buscado',
  })
  @ApiQuery({
    name: 'priceMin',
    description: 'Filtro con precio mínimo',
    required: false,
  })
  @ApiQuery({
    name: 'priceMax',
    description: 'Filtro con precio máximo',
    required: false,
  })
  @ApiQuery({
    name: 'limit',
    description:
      'Número máximo de productos a entregar. Valor por defecto = 10',
    required: false,
  })
  @ApiQuery({
    name: 'offset',
    description:
      'Desde qué posición empezar a devolver productos. Valor por defecto = 0',
    required: false,
  })
  @ApiQuery({
    name: 'sortBy',
    description: 'Nombre de la propiedad sobre la cual filtrar',
    required: false,
    example: 'precio',
  })
  @ApiQuery({
    name: 'autor',
    description: 'Nombre del autor del libro',
    required: false,
    example: 'Gabriel Garcia Marquez',
  })
  @ApiQuery({
    name: 'rating',
    description: 'Rating del libro. Valor entre 0 y 5',
    required: false,
  })
  @ApiQuery({
    name: 'genero',
    description: 'Genero del libro. Puede filtrarse con más de uno',
    required: false,
    enum: GeneroEnum,
    isArray: true,
  })
  @ApiQuery({
    name: 'editorial',
    description:
      'Editorial del libro. Puede filtrarse con más de uno. Indicarlos separados con coma',
    required: false,
    example: 'Lumen,Taurus',
  })
  @ApiQuery({
    name: 'idioma',
    description: 'Idioma del libro. Puede filtrarse con más de uno',
    required: false,
    enum: Idioma,
    isArray: true,
  })
  @ApiQuery({
    name: 'encuadernacion',
    description: 'Encuadernación del libro',
    required: false,
    enum: Encuadernacion,
  })
  @ApiQuery({
    name: 'agnoPublicacionMin',
    description: 'Año mínimo de publicación del libro',
    required: false,
    example: 2010,
  })
  @ApiQuery({
    name: 'agnoPublicacionMax',
    description: 'Año máximo de publicación del libro',
    required: false,
    example: 2024,
  })
  @ApiResponse({ 
    status: 200, 
    description: 'Solicitud generada correctamente',
    type: ProductDTO,
    isArray: true
  })
  @ApiResponse({
    status: 404,
    description: 'No existen productos que cumplan la solicitud',
  })
  @Get('search')
  getSearchedProducts(
    @Query('query') query: string,
    @Query('priceMin', new ParseIntPipe({ errorHttpStatusCode: 400, optional: true }), ) priceMin?: number,
    @Query('priceMax', new ParseIntPipe({ errorHttpStatusCode: 400, optional: true }), ) priceMax?: number,
    @Query('limit', new ParseIntPipe({ errorHttpStatusCode: 400, optional: true }), ) limit = 10,
    @Query('offset', new ParseIntPipe({ errorHttpStatusCode: 400, optional: true }), )offset = 0,
    @Query('sortBy') sortBy?: string,
    @Query('autor') autor?: string,
    @Query('rating', new ParseIntPipe({ errorHttpStatusCode: 400, optional: true }), ) rating?: number,
    @Query('genero', new ParseEnumGeneroArrayPipe(GeneroEnum)) genero?: string | string[],
    @Query('editorial', new ParseArrayPipe({ items: String, separator: ',', optional: true, errorHttpStatusCode: 400, }), ) editorial?: string | string[],
    @Query('idioma', new ParseEnumIdiomaArrayPipe(Idioma)) idioma?: string | string[],
    @Query('encuadernacion', new ParseEnumPipe(Encuadernacion, { optional: true }), ) encuadernacion?: Encuadernacion, 
    @Query( 'agnoPublicacionMin', new ParseIntPipe({ errorHttpStatusCode: 400, optional: true }), ) agnoPublicacionMin?: number, 
    @Query( 'agnoPublicacionMax', new ParseIntPipe({ errorHttpStatusCode: 400, optional: true }), ) agnoPublicacionMax?: number,
  ): ProductDTO[] {
    console.log(typeof idioma);
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
      agnoPublicacionMax,
    };
    try {
      return this.productsService.getSearchedProductos(query, filters);
    } catch (error) {
      throw new HttpException(
        'No se ha encontrado ningún producto con estas características',
        404,
      );
    }
  }

  @ApiTags('Products')
  @ApiResponse({
    status: 200,
    description: 'Este codigo se debe a que se pudo enviar el libro en base al isbn ingresado.',
    type: ProductDTO,
  })
  @ApiResponse({
    status: 404,
    description: 'Este codigo se debe a que no encuentra el isbn del libro.',
  })
  @Get('search/:isbn')
  async findOne(@Param('isbn') isbn: string): Promise<ProductDTO> {
    try {
      return await this.productsService.findOne(isbn);
    } catch (error) {
      throw new HttpException('Error al obtener el producto', 400);
    }
  }

  @ApiTags('Products')
  @ApiResponse({
    status: 200,
    description: 'Se obtuvo la lista de generos de forma satisfactoria.',
    type: String,
    isArray: true
    })
  @ApiResponse({
    status: 400,
    description: 'Hubo un error al obtener la lista de generos.',
  })
  @Get('genres')
  getGenres(): string[] {
    try {
      return this.productsService.getGenres();
    } catch (error) {
      throw new HttpException('Error al obtener los géneros de libros', 400);
    }
  }

  @Get('conexion')
  async getConexion(): Promise<proConexDTO[]> {
    const resolucion = await this.productsService.getConexion();
    return resolucion;
  }
}
