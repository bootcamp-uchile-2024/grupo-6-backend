import { BadRequestException, Body, Controller, Delete, Get, HttpException, Param, ParseArrayPipe, ParseBoolPipe, ParseEnumPipe, ParseIntPipe, Patch, Post, Query, UploadedFile, UseGuards, UseInterceptors, UsePipes, ValidationPipe } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiParam, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Libro } from 'src/orm/entity/libro';
import { ParseEnumGeneroArrayPipe } from 'src/products/pipes/parse-enum-genero-array-pipe.pipe';
import { ParseEnumIdiomaArrayPipe } from 'src/products/pipes/parse-enum-idioma-array-pipe';
import { RolesAutorizados } from 'src/seguridad/decorator/rol.decorator';
import { JwtGuard } from 'src/seguridad/guard/jwt.guard';
import { ValidarRolGuard } from 'src/seguridad/guard/validar-rol.guard';
import { Rol } from 'src/users/enum/rol.enum';
import { GetFilteredProductsDto } from './dto/get-filtered-products.dto';
import { GetProductDto } from './dto/get-product.dto';
import { proConexDTO } from './dto/proConexDTO';
import { UpdateProductDto } from './dto/update-product.dto';
import { EncuadernacionEnum } from './entities/encuadernacionEnum';
import { GeneroEnum } from './entities/generoEnum';
import { Idioma } from './entities/idioma';
import { ValidationCreateProductsPipe } from './pipes/validation-create-products.pipe';
import { ValidationDeleteProductsPipe } from './pipes/validation-delete-products.pipe';
import { ValidationGetProductsPipe } from './pipes/validation-get-product.pipe';
import { ValidationUpdateProductsPipe } from './pipes/validation-update-products.pipe';
import { ProductsService } from './products.service';
import { ValidationSearchProductsPipe } from './pipes/validation-search-products.pipe';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  // Crear producto --------------------------------------------------------
  @ApiTags('Products')
  @ApiOperation({ summary:'Crear un producto'})
  @ApiBearerAuth()
  @UseGuards(JwtGuard, ValidarRolGuard)
  @RolesAutorizados(Rol.ADMIN)
  @UseInterceptors(FileInterceptor('caratula'))
  @UsePipes(ValidationCreateProductsPipe)
  @ApiResponse({ status: 200,  description: 'Creación de producto exitosa',  type: GetProductDto })
  @ApiResponse({ status: 404, description: 'Error al crear producto. Revisar datos ingresados.', })
  // @UsePipes( new ValidationPipe() )
  @Post()
  async create(
    @Body() createProductDto,
    @UploadedFile() caratula
  ): Promise<GetProductDto> {

    try {
      return await this.productsService.create(createProductDto, caratula);
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  // Eliminar un producto --------------------------------------------------
  @ApiTags('Products')
  @ApiOperation({ summary:'Eliminar un producto'})
  @ApiBearerAuth()
  @UseGuards(JwtGuard, ValidarRolGuard)
  @RolesAutorizados(Rol.ADMIN)
  @UsePipes(ValidationDeleteProductsPipe)
  @ApiResponse({ status: 200, description: 'Se eliminó el libro correctamente' })
  @ApiResponse({ status: 400, description: 'Error al eliminar el libro' })
  @ApiParam({ name: 'isbn', required: true, type: 'string', example: '9788439732471', description: 'ISBN del libro' })
  @Delete(':isbn')
  async remove(@Param('isbn') isbn: string): Promise<object> {
    try {
      return await this.productsService.remove(isbn);
    } catch (error) {
      throw new HttpException('Error al eliminar el libro', 400);
    }
  }

  // Actualizar un producto ------------------------------------------------
  @ApiTags('Products')
  @ApiOperation({ summary:'Modificar un producto'})
  @ApiBearerAuth()
  @UseGuards(JwtGuard, ValidarRolGuard)
  @RolesAutorizados(Rol.ADMIN)
  @UsePipes(ValidationUpdateProductsPipe)
  @UseInterceptors(FileInterceptor('caratula'))
  @ApiResponse({ status: 200, description: 'Se actualizó el libro correctamente' })
  @ApiResponse({ status: 400, description: 'Error al actualizar libro' })
  @ApiParam({ name: 'isbn', required: true, type: 'string', example: '9788439732471', description: 'ISBN del libro' })
  @Patch(':isbn')
  async update(
    @Param('isbn') isbn: Libro, 
    @Body() updatePurchaseDto: UpdateProductDto ,
    @UploadedFile() caratula?
  ): Promise<GetProductDto> {
    try {
      console.log(isbn, updatePurchaseDto, caratula)
      return await this.productsService.update(isbn, updatePurchaseDto, caratula);
    } catch (error) {
      if (error instanceof BadRequestException){
        throw error
      } else {
        throw new HttpException(error, 400);
      }
    }
  }

  // HU Filtro de productos ------------------------------------------------
  @ApiTags('Products')
  @ApiOperation({ summary:'Obtener catalogo de productos'})
  @ApiQuery({ name: 'priceMin', description: 'Filtro con precio mínimo', required: false, })
  @ApiQuery({ name: 'priceMax', description: 'Filtro con precio máximo', required: false, })
  @ApiQuery({
    name: 'pagina',
    description: 'Número de la página a mostrar, empezando desde 1. Valor por defecto = 1',
    required: false,
  })
  @ApiQuery({ name: 'cantidad', description: 'Cantidad de productos a devolver. Valor por defecto = 12', required: false,})
  @ApiQuery({ name: 'sortBy', description: 'Nombre de la propiedad sobre la cual filtrar', required: false, example: 'precio', })
  @ApiQuery({ name: 'autor', description: 'Nombre del autor del libro', required: false, example: 'Gabriel Garcia Marquez', })
  @ApiQuery({ name: 'nombre', description: 'Título del libro', required: false, example: 'Cien años de soledad', })
  @ApiQuery({ name: 'rating', description: 'Rating del libro. Valor entre 0 y 5', required: false, })
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
  @ApiQuery({ name: 'isbn', description: 'Código ISBN del libro', required: false, example: '9789585581616', })
  @ApiQuery({ name: 'encuadernacion', description: 'Encuadernación del libro', required: false, enum: EncuadernacionEnum, })
  @ApiQuery({ name: 'agnoPublicacionMin', description: 'Año mínimo de publicación del libro', required: false, example: 2010, })
  @ApiQuery({ name: 'agnoPublicacionMax', description: 'Año máximo de publicación del libro', required: false, example: 2024, })
  @ApiQuery({ name: 'tendencia', description: 'Ordena los productos por cantidad de ventas', required: false, type: Boolean })
  @ApiQuery({ name: 'novedades', description: 'Ordena los productos desde el más recientemente agregado', required: false, type: Boolean })
  @ApiQuery({ name: 'destacado', description: 'Devuelve los productos catalogados como destacados', required: false, type: Boolean })
  @ApiResponse({ status: 200, description: 'Solicitud generada correctamente',  type: GetProductDto, isArray: true })
  @ApiResponse({ status: 404, description: 'Error al buscar los productos', })
  @Get('catalog')
  async getFilteredProducts(
    @Query('priceMin') priceMin?: string,
    @Query('priceMax') priceMax?: string,
    @Query('pagina') pagina: string = '1',
    @Query('cantidad') cantidad: string = '12',
    @Query('sortBy') sortBy?: string,
    @Query('autor') autor?: string,
    @Query('nombre') nombre?: string,
    @Query('rating') rating?: string,
    @Query('genero', new ParseEnumGeneroArrayPipe(GeneroEnum)) genero?: string | string[],
    @Query('editorial', new ParseArrayPipe({ items: String, separator: ',', optional: true, errorHttpStatusCode: 400, }), ) editorial?: string | string[],
    @Query('idioma', new ParseEnumIdiomaArrayPipe(Idioma)) idioma?: string | string[],
    @Query('isbn') isbn?: string,
    @Query('encuadernacion', new ParseEnumPipe(EncuadernacionEnum, { optional: true }), ) encuadernacion?: EncuadernacionEnum,
    @Query('agnoPublicacionMin') agnoPublicacionMin?: string,
    @Query('agnoPublicacionMax') agnoPublicacionMax?: string,
    @Query('tendencia') tendencias: string = 'false',
    @Query('novedades') novedades: string = 'false',
    @Query('destacado') destacados: string = 'false',
  ): Promise<GetFilteredProductsDto> {
    const filters = {
      priceMin: priceMin ? parseInt(priceMin): undefined,
      priceMax: priceMax ? parseInt(priceMax): undefined,
      pagina: parseInt(pagina),
      cantidad: parseInt(cantidad),
      sortBy,
      autor,
      nombre,
      rating: rating ? parseInt(rating) : undefined,
      genero,
      editorial: typeof editorial === 'string' ? [editorial] : editorial,
      idioma,
      isbn,
      encuadernacion,
      agnoPublicacionMin: agnoPublicacionMin ? parseInt(agnoPublicacionMin): undefined,
      agnoPublicacionMax: agnoPublicacionMax ? parseInt(agnoPublicacionMax): undefined,
      tendencias: tendencias ? tendencias == 'true' : undefined,
      novedades: novedades ? novedades == 'true' : undefined,
      destacados: destacados ? destacados == 'true' : undefined,
    };
    try {
      return await this.productsService.getFilteredProducts(filters);
    } catch (error) {
      throw new HttpException('Error al buscar los productos', 404);
    }
  }

  // HU Buscador de producto -----------------------------------------------
  @ApiTags('Products')
  @ApiOperation({ summary:'Búsqueda de productos'})
  @UsePipes(ValidationSearchProductsPipe)
  @ApiQuery({ name: 'query', description: 'Nombre, autor, editorial o ISBN de libro buscado', })
  @ApiQuery({ name: 'priceMin', description: 'Filtro con precio mínimo', required: false, })
  @ApiQuery({ name: 'priceMax', description: 'Filtro con precio máximo', required: false, })
  @ApiQuery({
    name: 'pagina',
    description: 'Número de la página a mostrar, empezando desde 1. Valor por defecto = 1',
    required: false,
  })
  @ApiQuery({ name: 'cantidad', description: 'Cantidad de productos a devolver. Valor por defecto = 12', required: false,})
  @ApiQuery({ name: 'sortBy', description: 'Nombre de la propiedad sobre la cual filtrar', required: false, example: 'precio', })
  @ApiQuery({ name: 'autor', description: 'Nombre del autor del libro', required: false, example: 'Gabriel Garcia Marquez', })
  @ApiQuery({ name: 'rating', description: 'Rating del libro. Valor entre 0 y 5', required: false, })
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
  @ApiQuery({ name: 'encuadernacion', description: 'Encuadernación del libro', required: false, enum: EncuadernacionEnum, })
  @ApiQuery({ name: 'agnoPublicacionMin', description: 'Año mínimo de publicación del libro', required: false, example: 2010, })
  @ApiQuery({ name: 'agnoPublicacionMax', description: 'Año máximo de publicación del libro', required: false, example: 2024, })
  @ApiQuery({ name: 'tendencia', description: 'Ordena los productos por cantidad de ventas', required: false, type: Boolean })
  @ApiQuery({ name: 'novedades', description: 'Ordena los productos desde el más recientemente agregado', required: false, type: Boolean })
  @ApiQuery({ name: 'destacado', description: 'Devuelve los productos catalogados como destacados', required: false, type: Boolean })
  @ApiResponse({ status: 200,  description: 'Solicitud generada correctamente', type: GetProductDto, isArray: true })
  @ApiResponse({ status: 404, description: 'No existen productos que cumplan la solicitud', })
  @Get('search')
  async getSearchedProducts(
    @Query('query') query: string,
    @Query('priceMin') priceMin?: string,
    @Query('priceMax') priceMax?: string,
    @Query('pagina') pagina: string = '1',
    @Query('cantidad') cantidad: string = '12',
    @Query('sortBy') sortBy?: string,
    @Query('autor') autor?: string,
    @Query('rating') rating?: string,
    @Query('genero', new ParseEnumGeneroArrayPipe(GeneroEnum)) genero?: string | string[],
    @Query('editorial', new ParseArrayPipe({ items: String, separator: ',', optional: true, errorHttpStatusCode: 400, }), ) editorial?: string | string[],
    @Query('idioma', new ParseEnumIdiomaArrayPipe(Idioma)) idioma?: string | string[],
    @Query('encuadernacion', new ParseEnumPipe(EncuadernacionEnum, { optional: true }), ) encuadernacion?: EncuadernacionEnum, 
    @Query('agnoPublicacionMin') agnoPublicacionMin?: string,
    @Query('agnoPublicacionMax') agnoPublicacionMax?: string,
    @Query('tendencia') tendencias: string = 'false',
    @Query('novedades') novedades: string = 'false',
    @Query('destacado') destacados: string = 'false',
  ): Promise<GetFilteredProductsDto> {
    const filters = {
      priceMin: priceMin ? parseInt(priceMin): undefined,
      priceMax: priceMax ? parseInt(priceMax): undefined,
      pagina: parseInt(pagina),
      cantidad: parseInt(cantidad),
      sortBy,
      autor,
      rating: rating ? parseInt(rating) : undefined,
      genero,
      editorial,
      idioma,
      encuadernacion,
      agnoPublicacionMin: agnoPublicacionMin ? parseInt(agnoPublicacionMin): undefined,
      agnoPublicacionMax: agnoPublicacionMax ? parseInt(agnoPublicacionMax): undefined,
      tendencias: tendencias ? tendencias == 'true' : undefined,
      novedades: novedades ? novedades == 'true' : undefined,
      destacados: destacados ? destacados == 'true' : undefined,
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

  // Buscar 1 producto -----------------------------------------------------
  @ApiTags('Products')
  @ApiOperation({ summary:'Obtener un producto'})
  @UsePipes(ValidationGetProductsPipe)
  @ApiResponse({ status: 200, description: 'Este codigo se debe a que se pudo enviar el libro en base al isbn ingresado.', type: GetProductDto, })
  @ApiResponse({ status: 404, description: 'Este codigo se debe a que no encuentra el isbn del libro.', })
  @Get('search/:isbn')
  async findOne(@Param('isbn') isbn: string): Promise<GetProductDto> {
    try {
      return await this.productsService.findOne(isbn);
    } catch (error) {
      throw new HttpException('Error al obtener el producto', 400);
    }
  }

  // Obtener generos -------------------------------------------------------
  @ApiTags('Products')
  @ApiOperation({ summary:'Obtener el listado de géneros'})
  @ApiResponse({ status: 200, description: 'Se obtuvo la lista de generos de forma satisfactoria.', type: String, isArray: true })
  @ApiResponse({ status: 400, description: 'Hubo un error al obtener la lista de generos.', })
  @Get('genres')
  async getGenres(): Promise<string[]> {
    try {
      return await this.productsService.getGenres();
    } catch (error) {
      throw new HttpException('Error al obtener los géneros de libros', 400);
    }
  }

  // Obtener editoriales ----------------------------------------------------
  @ApiTags('Products')
  @ApiOperation({ summary:'Obtener el listado de editoriales'})
  @ApiResponse({ status: 200, description: 'Se obtuvo la lista de editoriales de forma satisfactoria.', type: String, isArray: true })
  @ApiResponse({ status: 400, description: 'Hubo un error al obtener la lista de editoriales.', })
  @Get('publishers')
  async getPublishers(): Promise<string[]> {
    try {
      return await this.productsService.getPublishers();
    } catch (error) {
      throw new HttpException('Error al obtener las editoriales de libros', 400);
    }
  }

  // Obtener encuadernaciones ----------------------------------------------------
  @ApiTags('Products')
  @ApiOperation({ summary:'Obtener el listado de encuadernaciones'})
  @ApiResponse({ status: 200, description: 'Se obtuvo la lista de encuadernaciones de forma satisfactoria.', type: String, isArray: true })
  @ApiResponse({ status: 400, description: 'Hubo un error al obtener la lista de encuadernaciones.', })
  @Get('bindings')
  async getBinding(): Promise<string[]> {
    try {
      return await this.productsService.getBinding();
    } catch (error) {
      throw new HttpException('Error al obtener las encuadernaciones de libros', 400);
    }
  }
  // Obtener Idiomas ----------------------------------------------------
  @ApiTags('Products')
  @ApiOperation({ summary:'Obtener el listado de idiomas'})
  @ApiResponse({ status: 200, description: 'Se obtuvo la lista de idiomas de forma satisfactoria.', type: String, isArray: true })
  @ApiResponse({ status: 400, description: 'Hubo un error al obtener la lista de idiomas.', })
  @Get('languages')
  async getLanguages(): Promise<string[]> {
    try {
      return await this.productsService.getLanguages();
    } catch (error) {
      throw new HttpException('Error al obtener los idiomas de libros', 400);
    }
  }

  // Probar conexión -------------------------------------------------------
  @Get('conexion')
  async getConexion(): Promise<proConexDTO[]> {
    const resolucion = await this.productsService.getConexion();
    return resolucion;
  }


}
