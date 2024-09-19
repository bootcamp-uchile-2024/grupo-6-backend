import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { Genero } from './entities/genero';
import { Idioma } from './entities/idioma';
import { Encuadernacion } from './entities/encuadernacion';
import { ErrorStatus } from 'src/errorStatus';

@Injectable()
export class ProductsService {
  // Libros de prueba
  public products: Product[] = [
    new Product(
      '9788420412146',
      'Don Quijote de la Mancha',
      ['Miguel de Cervantes'],
      50,
      19000,
      [Genero.NOVELA, Genero.CLASICO],
      'Lengua Viva',
      Idioma.ESPANOL,
      Encuadernacion.TAPA_DURA,
      new Date(2015, 0),
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
      [Genero.NOVELA, Genero.CLASICO],
      'Literatura Random House',
      Idioma.ESPANOL,
      Encuadernacion.TAPA_DURA,
      new Date(2021, 0),
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
      [Genero.DISTOPIA, Genero.CIENCIA_FICCION],
      'Alma classic',
      Idioma.INGLES,
      Encuadernacion.TAPA_BLANDA,
      new Date(2021, 0),
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
      [Genero.ROMANCE, Genero.CLASICO],
      'Alba Editorial',
      Idioma.ESPANOL,
      Encuadernacion.TAPA_DURA,
      new Date(2009, 0),
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
      [Genero.FANTASIA, Genero.AVENTURA],
      'Minotauro',
      Idioma.ESPANOL,
      Encuadernacion.TAPA_BLANDA,
      new Date(2022, 0),
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
      [Genero.FANTASIA, Genero.TERROR],
      'Planeta Comic',
      Idioma.ESPANOL,
      Encuadernacion.TAPA_DURA,
      new Date(2021, 0),
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
      [Genero.FANTASIA, Genero.HISTORIA],
      'Destino',
      Idioma.ESPANOL,
      Encuadernacion.TAPA_BLANDA,
      new Date(2017, 0),
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
      [Genero.HISTORIA],
      'Debate',
      Idioma.ESPANOL,
      Encuadernacion.TAPA_BLANDA,
      new Date(2014, 0),
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
      [Genero.INFANTIL, Genero.FILOSOFIA_RELIGION],
      'Mariner Books',
      Idioma.FRANCES,
      Encuadernacion.TAPA_BLANDA,
      new Date(2001, 0),
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
      [Genero.BIOGRAFIAS],
      'Lumen',
      Idioma.ESPANOL,
      Encuadernacion.TAPA_BLANDA,
      new Date(2018, 0),
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
      [Genero.POESIA],
      'Lumen',
      Idioma.ESPANOL,
      Encuadernacion.TAPA_BLANDA,
      new Date(2024, 0),
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
      [Genero.CIENCIA_MATEMATICA],
      'Crítica',
      Idioma.ESPANOL,
      Encuadernacion.TAPA_BLANDA,
      new Date(2017, 0),
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
      [Genero.FILOSOFIA_RELIGION, Genero.CLASICO],
      'Taurus',
      Idioma.ESPANOL,
      Encuadernacion.TAPA_BLANDA,
      new Date(2021, 0),
      176,
      0,
      '9789569635601.jpeg',
      '15cm x 21cm',
      '978-9-56-963560-1',
      'En esta obra, Marco Aurelio, emperador romano y filósofo estoico, reflexiona sobre la vida, el destino y la virtud. Es un texto introspectivo que ofrece lecciones sobre cómo vivir en armonía con el mundo y con uno mismo. Su filosofía estoica ha influido en generaciones de lectores.',
    ),
  ];

  create(createProductDto: CreateProductDto) {
    return 'This action adds a new product';
  }

  // findAll() {
  //   return `This action returns all products`;
  // }

  nombreEpica() {
    return `Este modulo corresponde a la epica "Obtencion de Producto".`;
  }

  findOne(isbn: string): Product {
    const producto: Product = this.products.find(
      (element: Product) => element.isbn == isbn,
    );
    return producto;
  }

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
      encuadernacion?: Encuadernacion;
      agnoPublicacionMin?: number;
      agnoPublicacionMax?: number;
    },
  ) {
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
      // const generos = Array.isArray(filters.genero) ? filters.genero : [filters.genero];
      // const generosEnums = generos.map(g => Genero[g as keyof typeof Genero]); // Convertir a enums

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
      // const idiomas = Array.isArray(filters.idioma) ? filters.idioma : [filters.idioma];
      // const idiomasEnums = idiomas.map(idioma => Idioma[idioma as keyof typeof Idioma]); // Convertir a enums

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
          book.agnoPublicacion >= new Date(filters.agnoPublicacionMin, 0),
      );
    }
    // Filtro año publicación máximo
    if (filters.agnoPublicacionMax !== undefined) {
      filteredProducts = filteredProducts.filter(
        (book) =>
          book.agnoPublicacion <= new Date(filters.agnoPublicacionMax, 0),
      );
    }

    return filteredProducts;
  }

  sortProducts(
    filteredProducts: Product[],
    filters: {
      sortBy?: string;
    },
  ) {
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
  ) {
    const offset = filters.offset || 0;
    const limit = filters.limit || filteredProducts.length;

    return filteredProducts.slice(offset, offset + limit);
  }

  getFilteredProducts(filters: {
    priceMin?: number;
    priceMax?: number;
    limit?: number;
    offset?: number;
    sortBy?: string;
    autor?: string;
    nombre?: string;
    rating?: number;
    genero?;
    editorial?: string[];
    idioma?;
    isbn?: string;
    encuadernacion?: Encuadernacion;
    agnoPublicacionMin?: number;
    agnoPublicacionMax?: number;
  }) {
    let filteredProducts = this.products;

    // Aplicar filtros
    filteredProducts = this.applyFilterProducts(filteredProducts, filters);

    // Ordenar
    filteredProducts = this.sortProducts(filteredProducts, filters);

    // Paginación
    filteredProducts = this.paginationProducts(filteredProducts, filters);

    // Gestión de errores
    if (!filteredProducts) {
      throw new ErrorStatus(
        'No existen productos que cumplan la solicitud',
        404,
      );
    }

    return filteredProducts;
  }

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
      encuadernacion?: Encuadernacion;
      agnoPublicacionMin?: number;
      agnoPublicacionMax?: number;
    },
  ) {
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

    return filteredProducts;
  }

  // Obtener generos de los libros
  getGenres() {
    return Object.values(Genero);
  }

  // update(id: number, updateProductDto: UpdateProductDto) {
  //   return `This action updates a #${id} product`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} product`;
  // }
}
