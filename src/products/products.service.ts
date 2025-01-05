import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import * as fs from 'fs';
import { promises as FS } from 'fs';
import { Autor } from 'src/orm/entity/autor';
import { Editorial } from 'src/orm/entity/editorial';
import { Encuadernacion } from 'src/orm/entity/encuadernacion';
import { Genero } from 'src/orm/entity/genero';
import { GeneroLibro } from 'src/orm/entity/genero_libro';
import { IdiomaLibro } from 'src/orm/entity/idioma_libro';
import { Libro } from 'src/orm/entity/libro';
import { ErrorStatus } from 'src/products/errorStatus';
import { Between, DataSource, Like, MoreThanOrEqual, Repository } from 'typeorm';
import { CreateValidatedProductDto } from './dto/create-validated-product.dto';
import { GetFilteredProductsDto } from './dto/get-filtered-products.dto';
import { GetProductDto } from './dto/get-product.dto';
import { proConexDTO } from './dto/proConexDTO';
import { UpdateProductDto } from './dto/update-product.dto';
import { EncuadernacionEnum } from './entities/encuadernacionEnum';
import { GeneroEnum } from './entities/generoEnum';
import { LibroMapper } from './mappers/libro.mapper';

@Injectable()
export class ProductsService {
  constructor(
    @InjectDataSource() 
    private readonly dataSource: DataSource,

    @InjectRepository(Libro) 
    private readonly productRepository: Repository<Libro>,

    @InjectRepository(Autor) 
    private readonly autorRepository: Repository<Autor>,

    @InjectRepository(Genero) 
    private readonly generoRepository: Repository<Genero>,

    @InjectRepository(Editorial)
    private readonly editorialRepository: Repository<Editorial>,

    @InjectRepository(GeneroLibro)
    private readonly generoLibroRepository: Repository<GeneroLibro>,
  
    @InjectRepository(IdiomaLibro)
    private readonly idiomaRepository: Repository<IdiomaLibro>,

    @InjectRepository(Encuadernacion)
    private readonly encuadernacionRepository: Repository<Encuadernacion>,
    ) {}

  
  public proConex: proConexDTO[] = [];

  // Crear producto --------------------------------------------------------
  async create(
    createProductDto: CreateValidatedProductDto,
    caratula
  ): Promise<GetProductDto> {
    const ruta_archivos_local: string = './estatics'

    // Crear editorial si no existe
    if (!createProductDto.id_editorial){
      const editorial = new Editorial();
      editorial.descripcion = createProductDto.editorial;
      createProductDto.id_editorial = editorial.id;

      try {
        await this.editorialRepository.save(editorial)
      } catch(error) {
        throw new HttpException('Error al guardar editorial', 400)
      }
      const editorialNueva = await this.editorialRepository.findOneBy({
        descripcion: editorial.descripcion
      });
      createProductDto.id_editorial = editorialNueva.id;
    }

    // Crear genero si no existe
    for (let i in createProductDto.id_generos){
      const id_genero = createProductDto.id_generos[i];
      
      if (!id_genero){
        const genero = new Genero();
        genero.descripcion = createProductDto.genero[i] as GeneroEnum;
        try {
          await this.generoRepository.save(genero)
          const nuevoGenero = await this.generoRepository.findOneBy({descripcion: genero.descripcion});
          createProductDto.id_generos[i] = nuevoGenero.id;
        } catch(error) {
          throw new HttpException('Error al guardar genero', 400)
        }
      }
    }
      
    // Crear autores si no existen
    if (!createProductDto.id_autor){
      const autor = new Autor();
      autor.nombre = createProductDto.autor;
      createProductDto.id_autor = autor.id;

      try {
        await this.autorRepository.save(autor);
      } catch(error) {
        throw new HttpException('Error al guardar autor', 400)
      }
    };
    
    // Guardar Caratula
    try {
      createProductDto.caratula = caratula.originalname;
      const ruta_archivo: string = `${ruta_archivos_local}/${caratula.originalname}`
      await FS.writeFile(ruta_archivo, caratula.buffer);
    } catch (error){
      throw new HttpException(error, 400)
    }
    
    // Guardar libro en BD
    const libroEntity: Libro = LibroMapper.dtoToEntity(createProductDto);
    await this.productRepository.save(libroEntity);
    const libro = await this.productRepository.findOne({
      where: { isbn: createProductDto.isbn },
      relations: {
        editorial: true,
        idiomaLibro: true,
        encuadernacion: true,
        generos: true,
        autor: true,
      }
    })

    // Crear asignación de generos
    for (const id_genero of createProductDto.id_generos){
      const genero_libro = new GeneroLibro();
      genero_libro.id_genero = id_genero;
      genero_libro.isbn_libro = libro.isbn;

      await this.generoLibroRepository.save(genero_libro);
    }

    const libroCreado = await this.productRepository.findOne({
      where: { isbn: createProductDto.isbn },
      relations: {
        editorial: true,
        idiomaLibro: true,
        encuadernacion: true,
        generos: true,
        autor: true,
      }
    })
    console.log(libroCreado)
    return LibroMapper.entityToDto(libroCreado);

  }

  // Probar conexión -------------------------------------------------------
  async getConexion():Promise<proConexDTO[]> {
    const conexionBD = "SELECT isbn, nombre, precio FROM libro;";
    const result = await this.dataSource.query(conexionBD);

    for (const productoFila of result){
      const proDTO = new proConexDTO();
      proDTO.isbn = productoFila.isbn;
      proDTO.nombre = productoFila.nombre;
      proDTO.precio = productoFila.precio;
      this.proConex.push(proDTO);
    }
    return this.proConex;
  }

  // Encontrar un producto -------------------------------------------------
  async findOne(isbn: string): Promise<GetProductDto> {
    const producto: Libro = await this.productRepository.findOne(
      {
      where: {
        isbn: isbn
      },
      relations: {
        autor: true,
        editorial: true,
        idiomaLibro: true,
        encuadernacion: true,
        generos: true,
        resena: true,
      }
    })

    return LibroMapper.entityToDto(producto);
  }

  // HU Catálogo de productos ----------------------------------------------
  async getFilteredProducts(filters: {
    priceMin?: number;
    priceMax?: number;
    pagina?: number;
    cantidad?: number;
    sortBy?: string;
    autor?: string;
    nombre?: string;
    rating?: number;
    genero?;
    editorial?: string[];
    idioma?;
    isbn?: string;
    encuadernacion?: EncuadernacionEnum;
    agnoPublicacionMin?: number;
    agnoPublicacionMax?: number;
    tendencias?: boolean;
    novedades?: boolean;
    destacados?: boolean;
  }): Promise<GetFilteredProductsDto> {

    // Condiciones aplicados al "where"
    let condiciones: { [key: string]: any } = {};
    
    // Filtro de habilitado
    condiciones.habilitado = true;

    // Filtro nombre
    if (filters.nombre) {
      condiciones.nombre = Like(`%${filters.nombre}%`);
    }
    // Filtro rating
    if (filters.rating !== undefined) {
      condiciones.rating = MoreThanOrEqual(filters.rating);
    }
    // Filtro precio mínimo y máximo
    const priceMin = filters.priceMin ? filters.priceMin : -1e6;
    const priceMax = filters.priceMax ? filters.priceMax : 1e6;

    if (filters.priceMin !== undefined || filters.priceMax !== undefined) {
      condiciones.precio = Between(priceMin, priceMax);
    }
    // Filtro isbn
    if (filters.isbn) {
      condiciones.isbn = filters.isbn;
    }
    // Filtro destacado
    (filters.destacados) && (condiciones.destacado = filters.destacados);

    // Filtro año publicación mínimo y máximo
    const agnoMin = filters.agnoPublicacionMin ? filters.agnoPublicacionMin : -1e6;
    const agnoMax = filters.agnoPublicacionMax ? filters.agnoPublicacionMax : 1e6;

    if (filters.agnoPublicacionMin !== undefined || filters.agnoPublicacionMax !== undefined) {
      condiciones.agno_publicacion = Between(
        agnoMin, 
        agnoMax
      )};

    // Filtro autor
    if (filters.autor) {
      condiciones.autor = {
        nombre: Like(`%${filters.autor}%`)
      };
    } 
    // Filtro editorial
    if (filters.editorial) {
      condiciones.editorial = {
        descripcion: Like(`%${filters.editorial}%`)
      }
    }
    // Filtro idioma
    if (filters.idioma) {
      condiciones.idiomaLibro = {
        descripcion: filters.idioma
      }
    }
    // Filtro encuadernación
    if (filters.encuadernacion) {
      condiciones.encuadernacion = {
        descripcion: filters.encuadernacion
      }
    }
    // Filtro genero
    if (filters.genero !== undefined) {
      condiciones.generos = {
        descripcion: filters.genero
      }
    }
    // Ordenar
    let orderBy: { [key: string]: any } = {}

    if (filters.sortBy){
      orderBy[filters.sortBy] = 'ASC';
    }
    // Ordenar por fecha de creación del producto
    if (filters.novedades !== undefined){
      orderBy['fecha_creacion'] = 'DESC';
    }
      
    
    const results : [ Libro[], number ] = await this.productRepository.findAndCount({
      relations: {
        autor: true,
        editorial: true,
        idiomaLibro: true,
        encuadernacion: true,
        generos: true,
        libroCompra: true,
      },
      where: {...condiciones,},
      order: orderBy,
      // take: filters.cantidad,
      // skip: offset
    })
    let products =  results[0];
    const totalProductos: number = results[1];

    // Gestión de errores
    if (!products) {
      throw new ErrorStatus(
        'No existen productos que cumplan la solicitud',
        404,
      );
    }
    // Ordenar por cantidad de ventas
    if (filters.tendencias !== undefined){
      products = products.sort((a, b) => {
        const sumaA = a.libroCompra?.reduce((sum, item) => sum + (item.cantidad || 0), 0) || 0;
        const sumaB = b.libroCompra?.reduce((sum, item) => sum + (item.cantidad || 0), 0) || 0;
        return sumaB - sumaA;
      })
    }

    // Aplicar paginación
    const offset = (filters.pagina-1) * filters.cantidad;
    const paginatedProducts = products.slice(offset, offset + filters.cantidad);

    const productsDto: GetProductDto[] = LibroMapper.entityListToCatalogDtoList(paginatedProducts);

    return LibroMapper.entityToDtoPaginacion(
      productsDto, totalProductos, filters.cantidad, filters.pagina
    );
  }

  // Buscador de productos -------------------------------------------------
  async getSearchedProductos(
    query: string,
    filters: {
      priceMin?: number;
      priceMax?: number;
      pagina?: number;
      cantidad?: number;
      sortBy?: string;
      autor?: string;
      rating?: number;
      genero?;
      editorial?;
      idioma?;
      encuadernacion?: EncuadernacionEnum;
      agnoPublicacionMin?: number;
      agnoPublicacionMax?: number;
      tendencias?: boolean;
      novedades?: boolean;
      destacados?: boolean;
    },
  ): Promise<GetFilteredProductsDto> {


    // Condiciones aplicados al "where"
    let condiciones: { [key: string]: any } = {};
    // Filtro de habilitado
    condiciones.habilitado = true;
    // Filtro precio mínimo y máximo
    const priceMin = filters.priceMin ? filters.priceMin : -1e6;
    const priceMax = filters.priceMax ? filters.priceMax : 1e6;

    if (filters.priceMin !== undefined || filters.priceMax !== undefined) {
      condiciones.precio = Between(priceMin, priceMax);
    }
    // Filtro rating
    if (filters.rating !== undefined) {
      condiciones.rating = MoreThanOrEqual(filters.rating);
    }
    // Filtro genero
    if (filters.genero !== undefined) {
      condiciones.generos = {
        descripcion: filters.genero
      }
    }
    // Filtro editorial
    if (filters.editorial) {
      condiciones.editorial = {
        descripcion: Like(`%${filters.editorial}%`)
      }
    }
    // Filtro idioma
    if (filters.idioma) {
      condiciones.idiomaLibro = {
        descripcion: filters.idioma
      }
    }
    // Filtro encuadernación
    if (filters.encuadernacion) {
      condiciones.encuadernacion = {
        descripcion: filters.encuadernacion
      }
    }
    // Filtro año publicación mínimo y máximo
    const agnoMin = filters.agnoPublicacionMin ? filters.agnoPublicacionMin : -1e6;
    const agnoMax = filters.agnoPublicacionMax ? filters.agnoPublicacionMax : 1e6;

    if (filters.agnoPublicacionMin !== undefined || filters.agnoPublicacionMax !== undefined) {
      condiciones.agno_publicacion = Between(
        agnoMin, 
        agnoMax
      )};

    // Ordenar
    let orderBy: { [key: string]: any } = {}

    if (filters.sortBy){
      orderBy[filters.sortBy] = 'ASC';
    }
    // Ordenar por fecha de creación del producto
    if (filters.novedades !== undefined){
      orderBy['fecha_creacion'] = 'DESC';
    }
      
    const results : [ Libro[], number ] = await this.productRepository.findAndCount({
      relations: {
        autor: true,
        editorial: true,
        idiomaLibro: true,
        encuadernacion: true,
        generos: true,
        libroCompra: true,
      },
      where: [
        { 
          ...condiciones,
          isbn: Like(`%${query}%`), 
        },
        { 
          ...condiciones,
          nombre: Like(`%${query}%`)
        },
        { 
          ...condiciones,
          autor: {
            nombre: Like(`%${query}%`)
          }},
        {
          ...condiciones,
          editorial: {
            descripcion: Like(`%${query}%`)
        }},
      ],
      order: orderBy,
      // take: filters.cantidad,
      // skip: offset
    })
    let products =  results[0];
    const totalProductos: number = results[1];
    
    // Gestión de errores
    if (!products) {
      throw new ErrorStatus(
        'No existen productos que cumplan la solicitud',
        404,
      );
    }
    // Ordenar por cantidad de ventas
    if (filters.tendencias !== undefined){
      products = products.sort((a, b) => {
        const sumaA = a.libroCompra?.reduce((sum, item) => sum + (item.cantidad || 0), 0) || 0;
        const sumaB = b.libroCompra?.reduce((sum, item) => sum + (item.cantidad || 0), 0) || 0;
        return sumaB - sumaA;
      })
    }

    // Paginación
    const offset = (filters.pagina-1) * filters.cantidad;
    const paginatedProducts = products.slice(offset, offset + filters.cantidad);

    const productsDto: GetProductDto[] = LibroMapper.entityListToCatalogDtoList(paginatedProducts)

    return LibroMapper.entityToDtoPaginacion(
      productsDto, totalProductos, filters.cantidad, filters.pagina
    );
  }

  // Obtener generos de los libros -----------------------------------------
  async getGenres(): Promise<string[]> {
    const generosEntity: Genero[] = await this.generoRepository.find({
      select: ['descripcion']
    });
    return generosEntity.map( genero => genero.descripcion );
  }

  // Obtener editoriales de los libros -------------------------------------
  async getPublishers(): Promise<string[]> {
    const editorialesEntity: Editorial[] = await this.editorialRepository.find({
      select: ['descripcion']
    });

    return editorialesEntity.map( editorial => editorial.descripcion );
  }

  // Obtener encuadernación de los libros -----------------------------------------
  async getBinding(): Promise<string[]> {
    const encuadernacionEntity: Encuadernacion[] = await this.encuadernacionRepository.find({
      select: ['descripcion']
    });
    return encuadernacionEntity.map( e => e.descripcion );
  }
  // Obtener idiomas de los libros -----------------------------------------
  async getLanguages(): Promise<string[]> {
    const idiomaEntity: IdiomaLibro[] = await this.idiomaRepository.find({
        select: ['descripcion']
      });
    return idiomaEntity.map( idioma => idioma.descripcion );
  }

  // Eliminar un producto --------------------------------------------------
  async remove(isbn: string): Promise<object>{
    const ruta_archivos_local: string = './estatics';

    // Buscar producto
    const libro: Libro = await this.productRepository.findOneBy({
      isbn: isbn
    })
    if (!libro){
      throw new NotFoundException(`No existe el libro con ISBN: ${isbn}`)
    }
    // Eliminar libro de BD
    try{
      await this.productRepository
        .createQueryBuilder()
        .delete()
        .from(Libro)
        .where('isbn = :isbn', {isbn})
        .execute();
    } catch (error) {
      throw new Error(`Error al eliminar libro en la BD: ${error.message}`)
    }

    // Eliminar caratula
    const ruta_archivo: string = `${ruta_archivos_local}/${libro.caratula}`

    if (fs.existsSync(ruta_archivo)){
      await FS.unlink(ruta_archivo);
    }

    return { 
      message: `Fue eliminado el libro con ISBN: ${isbn}`
    };
  }

  // Actualizar datos de un libro ------------------------------------------
  async update(
    libro: Libro, 
    updateProductDto: UpdateProductDto,
    caratula?
  ){
    let condiciones: { [key: string]: any } = {};
    const ruta_archivos_local: string = './estatics'

    if (updateProductDto.nombre){
      condiciones.nombre = updateProductDto.nombre;
    }
    if (updateProductDto.stockLibro){
      condiciones.stock_libro = updateProductDto.stockLibro;
    }
    if (updateProductDto.precio){
      condiciones.precio = updateProductDto.precio;
    }
    if (updateProductDto.rating){
      condiciones.rating = updateProductDto.rating;
    }
    if (updateProductDto.destacado !== undefined){
      condiciones.destacado = updateProductDto.destacado;
    }
    if (updateProductDto.habilitado !== undefined){
      condiciones.habilitado = updateProductDto.habilitado;
    }

    if (updateProductDto.editorial){
      let editorial = await this.editorialRepository.findOneBy({
        descripcion: updateProductDto.editorial
      })

      // En caso de no encontrar la editorial se crea una nueva
      if (!editorial){
        // Añadir nueva editorial
        const editorialNueva = this.editorialRepository.create();
        editorialNueva.descripcion = updateProductDto.editorial;
        await this.editorialRepository.save(editorialNueva);

        editorial = await this.editorialRepository.findOneBy({
          descripcion: updateProductDto.editorial
        });
      };
      
      condiciones.id_editorial = editorial.id;
    }
    
    if (updateProductDto.autor){
      let autor = await this.autorRepository.findOneBy({
        nombre: updateProductDto.autor
      });

      if (!autor){
        const autorNuevo = this.autorRepository.create();
        autorNuevo.nombre = updateProductDto.autor;
        await this.autorRepository.save(autorNuevo);

        autor = await this.autorRepository.findOneBy({
          nombre: updateProductDto.nombre
        });
      }
      condiciones.id_autor = autor.id;
    }

    if (updateProductDto.idioma){
      const idioma = await this.idiomaRepository.findOneBy({
        descripcion: updateProductDto.idioma
      });
      condiciones.id_idioma = idioma.id;
    }
    if (updateProductDto.encuadernacion){
      const encuadernacion = await this.encuadernacionRepository.findOneBy({
        descripcion: updateProductDto.encuadernacion
      })
      condiciones.id_encuadernacion = encuadernacion.id;
    }
    if (updateProductDto.agnoPublicacion){
      condiciones.agno_publicacion = updateProductDto.agnoPublicacion;
    }
    if (updateProductDto.numeroPaginas){
      condiciones.numero_paginas = updateProductDto.numeroPaginas;
    }
    if (updateProductDto.descuento !== undefined){
      condiciones.descuento = updateProductDto.descuento;
    }
    if (typeof caratula !== 'undefined'){
      condiciones.caratula = caratula.originalname;
      
      // Eliminar archivo antiguo
      const old_path: string = `${ruta_archivos_local}/${libro.caratula}`

      if (fs.existsSync(old_path)){
        await FS.unlink(old_path);
      }
      // Guardar nuevo archivo
      const ruta_archivo: string = `${ruta_archivos_local}/${caratula.originalname}`
      await FS.writeFile(ruta_archivo, caratula.buffer);
    }
    if (updateProductDto.dimensiones){
      condiciones.dimensiones = updateProductDto.dimensiones;
    }
    if (updateProductDto.codigoBarra){
      condiciones.codigo_barra = updateProductDto.codigoBarra;
    }
    if (updateProductDto.resumen){
      condiciones.resumen = updateProductDto.resumen;
    }
    
    if (Object.keys(condiciones).length !== 0){
      await this.productRepository.update(
        { isbn: libro.isbn, },
        condiciones
      );
    }

    // Generos
    if (updateProductDto.genero){
      // Eliminar generos antiguos
      await this.generoLibroRepository.delete({
        isbn_libro: libro.isbn
      })
      // Añadir generos nuevos
      for (const genero of updateProductDto.genero){
        const generoEntity = await this.generoRepository.findOneBy({
          descripcion: genero,
        })
        const generoLibro = this.generoLibroRepository.create();
        generoLibro.id_genero = generoEntity.id;
        generoLibro.isbn_libro = libro.isbn;

        await this.generoLibroRepository.save(generoLibro);
      }
    }
    // Autores
    if (updateProductDto.autor){
      // Añadir nuevo autor
      const autorNuevo = this.autorRepository.create();
      autorNuevo.nombre = updateProductDto.autor;
      await this.autorRepository.save(autorNuevo);
    }
    // Devolver libro actualizado
    const libroActualizado = await this.productRepository.findOne({
      where: { isbn: libro.isbn },
      relations: {
        idiomaLibro: true,
        generos: true,
        encuadernacion: true,
        autor: true,
        editorial: true
      }
    });

    return LibroMapper.entityToDto(libroActualizado)
  }

}
  