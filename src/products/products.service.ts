import { HttpException, Injectable } from '@nestjs/common';
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import { promises as FS } from 'fs';
import { Autor } from 'src/orm/entity/autor';
import { AutorLibro } from 'src/orm/entity/autor_libro';
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
import { Idioma } from './entities/idioma';
import { Product } from './entities/product.entity';
import { LibroMapper } from './mappers/libro.mapper';

@Injectable()
export class ProductsService {
  // Libros de prueba

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

    @InjectRepository(AutorLibro)
    private readonly autorLibroRepository: Repository<AutorLibro>,

    @InjectRepository(GeneroLibro)
    private readonly generoLibroRepository: Repository<GeneroLibro>,
  
    @InjectRepository(IdiomaLibro)
    private readonly idiomaRepository: Repository<IdiomaLibro>,

    @InjectRepository(Encuadernacion)
    private readonly encuadernacionRepository: Repository<Encuadernacion>,
    ) {}

  
  public proConex: proConexDTO[] = [];

  public products: Product[] = [
    new Product(
      '9788420412146',
      'Don Quijote de la Mancha',
      ['Miguel de Cervantes'],
      50,
      19000,
      [GeneroEnum.DRAMA, GeneroEnum.COMEDIA],
      'Lengua Viva',
      Idioma.ESPANOL,
      EncuadernacionEnum.TAPA_DURA,
      2015,
      1376,
      0,
      '9788420412146.jpg',
      '15cm x 25cm',
      '978-8-42-041214-6',
      'La obra maestra de Miguel de Cervantes narra las aventuras de Alonso Quijano, quien, tras leer muchos libros de caballerías, decide convertirse en un caballero andante, Don Quijote. Acompañado por su fiel escudero Sancho Panza, busca revivir la caballería en un mundo moderno. Es una sátira profunda sobre la realidad y la ficción, y un clásico de la literatura universal.',
    ),
    new Product(
      '9789585581616',
      'Cien Años de Soledad',
      ['Gabriel García Márquez'],
      70,
      20500,
      [GeneroEnum.DRAMA, GeneroEnum.COMEDIA],
      'Literatura Random House',
      Idioma.ESPANOL,
      EncuadernacionEnum.TAPA_DURA,
      2015,
      400,
      20,
      '9789585581616.jpeg',
      '13cm x 25cm',
      '978-9-58-558161-6',
      'Gabriel García Márquez cuenta la historia de la familia Buendía en el mítico pueblo de Macondo. Con un estilo de realismo mágico, explora temas como el destino, la soledad y los ciclos de la vida. La novela es un referente del boom latinoamericano y una de las más importantes del siglo XX.',
    ),
    new Product(
      '9781847498571',
      '1984',
      ['George Orwell'],
      20,
      12000,
      [GeneroEnum.DRAMA, GeneroEnum.COMEDIA],
      'Alma classic',
      Idioma.INGLES,
      EncuadernacionEnum.TAPA_BLANDA,
      2015,
      400,
      0,
      '9781847498571.jpeg',
      '15cm x 20cm',
      '978-1-84-749857-1',
      'George Orwell presenta una sociedad distópica controlada por el Estado totalitario liderado por el Gran Hermano. Winston Smith, el protagonista, lucha por su libertad y por descubrir la verdad en un mundo de vigilancia y manipulación constante. Es un alegato contra el autoritarismo y la pérdida de libertad individual.',
    ),
    new Product(
      '9788484284888',
      'Orgullo y Prejucio',
      ['Jane Austen'],
      30,
      30000,
      [GeneroEnum.DRAMA, GeneroEnum.COMEDIA],
      'Alba Editorial',
      Idioma.ESPANOL,
      EncuadernacionEnum.TAPA_DURA,
      2015,
      424,
      10,
      '9788484284888.jpeg',
      '14cm x 21cm',
      '978-8-48-428488-8',
      'En este clásico de Jane Austen, Elizabeth Bennet navega las presiones sociales y familiares para encontrar el amor verdadero. Su historia con el orgulloso Sr. Darcy revela las complejidades de las primeras impresiones y las dinámicas sociales en la Inglaterra del siglo XIX. Es una de las novelas románticas más influyentes de la historia.',
    ),
    new Product(
      '9788445009598',
      'El Señor de los Anillos - La Comunidad del Anillo',
      ['R. R. Tolkien'],
      100,
      17200,
      [GeneroEnum.FANTASIA, GeneroEnum.AVENTURA],
      'Minotauro',
      Idioma.ESPANOL,
      EncuadernacionEnum.TAPA_BLANDA,
      2015,
      488,
      0,
      '9788445009598.webp',
      '14cm x 25cm',
      '978-8-44-500959-8',
      'La primera parte de la trilogía de J.R.R. Tolkien sigue a Frodo Bolsón, quien debe destruir el Anillo Único para evitar que Sauron, el Señor Oscuro, lo use para dominar la Tierra Media. Frodo es acompañado por una comunidad de héroes. Es una de las obras fundacionales del género de fantasía épica.',
    ),
    new Product(
      '9788413417943',
      'Nieve, Cristal, Manzanas',
      ['Neil Gaiman', 'Collen Duran'],
      25,
      17500,
      [GeneroEnum.FANTASIA, GeneroEnum.TERROR],
      'Planeta Comic',
      Idioma.ESPANOL,
      EncuadernacionEnum.TAPA_DURA,
      2020,
      72,
      0,
      '9788413417943.jpeg',
      '15cm x 22cm',
      '978-8-41-341794-3',
      'Neil Gaiman y Colleen Duran ofrecen una reinterpretación oscura del cuento de Blancanieves desde la perspectiva de la madrastra. La historia explora temas de belleza, envejecimiento y traición. Este relato gráfico es una combinación única de fantasía y horror.',
    ),
    new Product(
      '9788423352838',
      'Mitos Nórdicos',
      ['Neil Gaiman'],
      12,
      21500,
      [GeneroEnum.DRAMA, GeneroEnum.COMEDIA],
      'Destino',
      Idioma.ESPANOL,
      EncuadernacionEnum.TAPA_BLANDA,
      2020,
      272,
      15,
      '9788423352838.jpeg',
      '15cm x 22cm',
      '978-8-42-335283-8',
      'Neil Gaiman recrea los mitos nórdicos, desde la creación del mundo hasta el Ragnarok, el fin de los tiempos. Presenta a dioses como Odin, Thor y Loki con un estilo accesible y moderno. Es una obra que invita a conocer más sobre la mitología escandinava.',
    ),
    new Product(
      '9789873752131',
      'De Animales a Dioses',
      ['Yuval Noah Harari'],
      120,
      14000,
      [GeneroEnum.EDUCATIVO],
      'Debate',
      Idioma.ESPANOL,
      EncuadernacionEnum.TAPA_BLANDA,
      2020,
      496,
      0,
      '9789873752131.jpeg',
      '15cm x 22cm',
      '978-9-87-375213-1',
      'Yuval Noah Harari analiza la evolución de la humanidad desde los primeros homínidos hasta el presente. Explora cómo los humanos han dominado el mundo a través de la cultura, la religión y la ciencia. Es un libro de historia que mezcla ciencia, filosofía y reflexiones sobre el futuro.',
    ),
    new Product(
      '9780156013987',
      'Le Petit Prince',
      ['Antoine De Saint-Exupéry'],
      96,
      17050,
      [GeneroEnum.INFANTIL, GeneroEnum.FILOSOFIA],
      'Mariner Books',
      Idioma.FRANCES,
      EncuadernacionEnum.TAPA_BLANDA,
      2020,
      96,
      10,
      '9780156013987.jpeg',
      '12cm x 20cm',
      '978-0-15-601398-7',
      'Antoine de Saint-Exupéry relata las aventuras de un joven príncipe que viaja entre planetas, aprendiendo sobre la vida, el amor y la soledad. Aunque es un cuento infantil, tiene profundas reflexiones filosóficas. Es uno de los libros más traducidos y leídos en el mundo.',
    ),
    new Product(
      '9789585404267',
      'Una Educacion',
      ['Tara Westover'],
      8,
      22300,
      [GeneroEnum.BIOGRAFIA],
      'Lumen',
      Idioma.ESPANOL,
      EncuadernacionEnum.TAPA_BLANDA,
      2020,
      470,
      0,
      '9789585404267.jpeg',
      '13.5cm x 21cm',
      '978-9-58-540426-7',
      'Tara Westover narra sus memorias sobre crecer en una familia mormona radical en Idaho, sin educación formal hasta los 17 años. A pesar de los obstáculos, logra acceder a la universidad y transformar su vida. Es una historia de superación, educación y la búsqueda de la identidad.',
    ),
    new Product(
      '9789566058885',
      'Elogio de la naturaleza',
      ['Gabriela Mistral'],
      25,
      11900,
      [GeneroEnum.DRAMA],
      'Lumen',
      Idioma.ESPANOL,
      EncuadernacionEnum.TAPA_BLANDA,
      2013,
      232,
      0,
      '9789566058885.jpeg',
      '14cm x 24cm',
      '978-9-56-605888-5',
      'Gabriela Mistral recopila en esta obra sus poemas dedicados a la naturaleza y la conexión espiritual con el mundo natural. A través de sus versos, celebra la belleza y las fuerzas elementales de la vida. Es una obra que muestra su sensibilidad y amor por el paisaje y lo simple.',
    ),
    new Product(
      '9789569993060',
      'Breves Respuestas a las Grandes Preguntas',
      ['Stephen Hawking'],
      23,
      12550,
      [GeneroEnum.EDUCATIVO],
      'Crítica',
      Idioma.ESPANOL,
      EncuadernacionEnum.TAPA_BLANDA,
      2013,
      288,
      15,
      '9789569993060.jpeg',
      '14cm x 23cm',
      '978-9-56-999306-0',
      'Stephen Hawking explora algunas de las grandes incógnitas de la humanidad, como el origen del universo, la posibilidad de vida extraterrestre y el futuro de la inteligencia artificial. Expone estas ideas complejas de manera accesible. Es un libro que invita a la reflexión científica y filosófica.',
    ),
    new Product(
      '9789569635601',
      'Meditaciones',
      ['Marco Aurelio'],
      30,
      11500,
      [GeneroEnum.FILOSOFIA],
      'Taurus',
      Idioma.ESPANOL,
      EncuadernacionEnum.TAPA_BLANDA,
      2013,
      176,
      0,
      '9789569635601.jpeg',
      '15cm x 21cm',
      '978-9-56-963560-1',
      'En esta obra, Marco Aurelio, emperador romano y filósofo estoico, reflexiona sobre la vida, el destino y la virtud. Es un texto introspectivo que ofrece lecciones sobre cómo vivir en armonía con el mundo y con uno mismo. Su filosofía estoica ha influido en generaciones de lectores.',
    ),
  ];

  // Crear producto --------------------------------------------------------
  async create(
    createProductDto: CreateValidatedProductDto,
    caratula
  ): Promise<any> {
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
    }
      
    // Crear autores si no existen
    for (let i=0; i < createProductDto.id_autores.length; i++){
      if (!createProductDto.id_autores[i]){
        const autor = new Autor();
        autor.nombre = createProductDto.autor[i];

        createProductDto.id_autores[i] = autor.id;

        try {
          await this.autorRepository.save(autor);
        } catch(error) {
          throw new HttpException('Error al guardar autor', 400)
        }
      }
    }
    
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
        autores: true,
      }
    })

    // Crear asignación de autores
    for (const id_autor of createProductDto.id_autores){
      const autor_libro = new AutorLibro();
      autor_libro.id_autor = id_autor;
      autor_libro.id_libro = libro.id;

      await this.autorLibroRepository.save(autor_libro);
    }

    // Crear asignación de generos
    for (const id_genero of createProductDto.id_generos){
      const genero_libro = new GeneroLibro();
      genero_libro.id_genero = id_genero;
      genero_libro.id_libro = libro.id;

      await this.generoLibroRepository.save(genero_libro);
    }

    const libroCreado = await this.productRepository.findOne({
      where: { isbn: createProductDto.isbn },
      relations: {
        editorial: true,
        idiomaLibro: true,
        encuadernacion: true,
        generos: true,
        autores: true,
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
    const producto: Libro = await this.productRepository.findOne({
      where: {
        isbn: isbn
      },
      relations: {
        editorial: true,
        idiomaLibro: true,
        encuadernacion: true,
        generos: true,
        autores: true
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
  }): Promise<GetFilteredProductsDto> {

    // Condiciones aplicados al "where"
    let condiciones: { [key: string]: any } = {};
    
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
      condiciones.autores = {
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
    
    // // Filtro genero
    if (filters.genero !== undefined) {
      condiciones.generos = {
        descripcion: filters.genero
      }
    }
    
    // Ordenar
    let orderBy: { [key: string]: any } = {}

    if (filters.sortBy){
      orderBy = {
        [filters.sortBy]: 'ASC'
      }
    }
      
    // Paginación
    const nroPaginaValido: number = (filters.pagina - 1);
    const offset: number = filters.cantidad * nroPaginaValido;

    const results : [ Libro[], number ] = await this.productRepository.findAndCount({
      relations: {
        editorial: true,
        idiomaLibro: true,
        encuadernacion: true,
        generos: true,
        autores: true
      },
      where: {...condiciones,},
      order: orderBy,
      take: filters.cantidad,
      skip: offset
    })
    
    const products = results[0];
    const totalProductos: number = results[1];

    // Gestión de errores
    if (!products) {
      throw new ErrorStatus(
        'No existen productos que cumplan la solicitud',
        404,
      );
    }
    const productsDto: GetProductDto[] = LibroMapper.entityListToDtoList(products)

    return LibroMapper.entityToDtoPaginacion(
      productsDto, totalProductos, filters.cantidad, filters.pagina
    );
  }

  // Buscador de productos -------------------------------------------------
  getSearchedProductos(
    query: string,
    filters: {
      priceMin?: number;
      priceMax?: number;
      limit?: number;
      offset?: number;
      sortBy?: string;
      autor?: string;
      rating?: number;
      genero?;
      editorial?;
      idioma?;
      encuadernacion?: EncuadernacionEnum;
      agnoPublicacionMin?: number;
      agnoPublicacionMax?: number;
    },
  ): GetProductDto[] {
    let filteredProducts = this.products;
    // Filtro por solicitud
    filteredProducts = filteredProducts.filter(
      (book) =>
        book.autor.some((autor) =>
          autor.toLowerCase().includes(query.toLowerCase()),
        ) ||
        book.nombre.toLowerCase().includes(query.toLowerCase()) ||
        book.isbn === query,
    );
    // Aplicar filtros
    filteredProducts = this.applyFilterProducts(filteredProducts, filters);

    // Ordenar
    filteredProducts = this.sortProducts(filteredProducts, filters);

    // Paginación
    filteredProducts = this.paginationProducts(filteredProducts, filters);

    // Gestión de errores
    if (filteredProducts.length == 0) {
      throw new ErrorStatus(
        'No existen productos que cumplan la solicitud',
        404,
      );
    }

    return filteredProducts.map( product => new GetProductDto(product) );
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

  // Eliminar un producto --------------------------------------------------
  async remove(id: number): Promise<string>{
    const ruta_archivos_local: string = './estatics';

    // Buscar producto
    const libro: Libro = await this.productRepository.findOneBy({
      id: id
    })
    // Eliminar libro de BD
    await this.productRepository.delete(id);

    // Eliminar caratula
    const ruta_archivo: string = `${ruta_archivos_local}/${libro.caratula}`
    await FS.unlink(ruta_archivo);

    return `Fue eliminado el libro con ID #${id}`;
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
    if (updateProductDto.stock_libro){
      condiciones.stock_libro = updateProductDto.stock_libro;
    }
    if (updateProductDto.precio){
      condiciones.precio = updateProductDto.precio;
    }
    if (updateProductDto.rating){
      condiciones.rating = updateProductDto.rating;
    }

    if (updateProductDto.editorial){
      var editorial = await this.editorialRepository.findOneBy({
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
    if (updateProductDto.agno_publicacion){
      condiciones.agno_publicacion = updateProductDto.agno_publicacion;
    }
    if (updateProductDto.numero_paginas){
      condiciones.numero_paginas = updateProductDto.numero_paginas;
    }
    if (updateProductDto.descuento){
      condiciones.descuento = updateProductDto.descuento;
    }
    if (typeof caratula !== 'undefined'){
      condiciones.caratula = caratula.originalname;
      
      // Eliminar archivo antiguo
      await FS.unlink(`${ruta_archivos_local}/${libro.caratula}`);

      // Guardar nuevo archivo
      const ruta_archivo: string = `${ruta_archivos_local}/${caratula.originalname}`
      await FS.writeFile(ruta_archivo, caratula.buffer);
    }
    if (updateProductDto.dimensiones){
      condiciones.dimensiones = updateProductDto.dimensiones;
    }
    if (updateProductDto.codigo_barra){
      condiciones.codigo_barra = updateProductDto.codigo_barra;
    }
    if (updateProductDto.resumen){
      condiciones.resumen = updateProductDto.resumen;
    }
    
    if (Object.keys(condiciones).length !== 0){
      await this.productRepository.update(
        { id: libro.id, },
        condiciones
      );
    }

    // Generos
    if (updateProductDto.genero){
      // Eliminar generos antiguos
      await this.generoLibroRepository.delete({
        id_libro: libro.id
      })
      // Añadir generos nuevos
      for (const genero of updateProductDto.genero){
        const generoEntity = await this.generoRepository.findOneBy({
          descripcion: genero,
        })
        const generoLibro = this.generoLibroRepository.create();
        generoLibro.id_genero = generoEntity.id;
        generoLibro.id_libro = libro.id;

        await this.generoLibroRepository.save(generoLibro);
      }
    }
    // Autores
    if (updateProductDto.autor){
      // Eliminar autores antiguos
      await this.autorLibroRepository.delete({
        id_libro: libro.id
      })
      // Añadir autores nuevos
      for (const autor of updateProductDto.autor){
        // Añadir nuevo autor
        const autorNuevo = this.autorRepository.create();
        autorNuevo.nombre = autor;
        await this.autorRepository.save(autorNuevo);

        // Añadir registros en tabla autor_libro
        const autorEntity: Autor = await this.autorRepository.findOneBy({
          nombre: autor,
        })
        const autorLibro = this.autorLibroRepository.create();
        autorLibro.id_autor = autorEntity.id;
        autorLibro.id_libro = libro.id;

        await this.autorLibroRepository.save(autorLibro);
      }
    }
    // Devolver libro actualizado
    const libroActualizado = await this.productRepository.findOne({
      where: { id: libro.id },
      relations: {
        idiomaLibro: true,
        generos: true,
        encuadernacion: true,
        autores: true,
        editorial: true
      }
    });

    return LibroMapper.entityToDto(libroActualizado)
  }


  // Funciones complementarias ---------------------------------------------
  applyFilterProducts(
    filteredProducts: Product[],
    filters: {
      priceMin?: number;
      priceMax?: number;
      autor?: string;
      nombre?: string;
      rating?: number;
      genero?;
      editorial?;
      idioma?;
      isbn?: string;
      encuadernacion?: EncuadernacionEnum;
      agnoPublicacionMin?: number;
      agnoPublicacionMax?: number;
    },
  ): Product[] {
    // Filtro autor
    if (filters.autor) {
      filteredProducts = filteredProducts.filter((book) =>
        book.autor.some((autor) =>
          autor.toLowerCase().includes(filters.autor.toLowerCase()),
        ),
      );
    }
    // Filtro nombre
    if (filters.nombre) {
      filteredProducts = filteredProducts.filter((book) =>
        book.nombre.toLowerCase().includes(filters.nombre.toLowerCase()),
      );
    }
    // Filtro precio mínimo
    if (filters.priceMin !== undefined) {
      filteredProducts = filteredProducts.filter(
        (book) => book.precio >= filters.priceMin,
      );
    }
    // Filtro precio máximo
    if (filters.priceMax !== undefined) {
      filteredProducts = filteredProducts.filter(
        (book) => book.precio <= filters.priceMax,
      );
    }
    // Filtro rating
    if (filters.rating !== undefined) {
      filteredProducts = filteredProducts.filter(
        (book) => book.rating >= filters.rating,
      );
    }
    // Filtro genero
    if (filters.genero !== undefined) {
      filteredProducts = filteredProducts.filter((book) =>
        book.genero.some((gen) => filters.genero.includes(gen)),
      );
    }
    // Filtro editorial
    if (filters.editorial) {
      filteredProducts = filteredProducts.filter((book) =>
        filters.editorial.includes(book.editorial),
      );
    }
    // Filtro idioma
    if (filters.idioma) {
      filteredProducts = filteredProducts.filter((book) =>
        filters.idioma.includes(book.idioma),
      );
    }
    // Filtro isbn
    if (filters.isbn) {
      filteredProducts = filteredProducts.filter(
        (book) => book.isbn === filters.isbn,
      );
    }
    // Filtro encuadernación
    if (filters.encuadernacion) {
      filteredProducts = filteredProducts.filter(
        (book) => book.encuadernacion === filters.encuadernacion,
      );
    }
    // Filtro año publicación mínimo
    if (filters.agnoPublicacionMin !== undefined) {
      filteredProducts = filteredProducts.filter(
        (book) =>
          book.agnoPublicacion >= filters.agnoPublicacionMin,
      );
    }
    // Filtro año publicación máximo
    if (filters.agnoPublicacionMax !== undefined) {
      filteredProducts = filteredProducts.filter(
        (book) =>
          book.agnoPublicacion <= filters.agnoPublicacionMax,
      );
    }

    return filteredProducts;
  }

  sortProducts(
    filteredProducts: Product[],
    filters: {
      sortBy?: string;
    },
  ): Product[] {
    if (filters.sortBy) {
      filteredProducts = filteredProducts.sort((a, b) =>
        a[filters.sortBy] > b[filters.sortBy] ? 1 : -1,
      );
    }
    return filteredProducts;
  }

  paginationProducts(
    filteredProducts: Product[],
    filters: {
      limit?: number;
      offset?: number;
    },
  ): Product[] {
    const offset = filters.offset || 0;
    const limit = filters.limit || filteredProducts.length;

    return filteredProducts.slice(offset, offset + limit);
  }

}
  