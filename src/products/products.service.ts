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
    new Product('9788420412146', 'Don Quijote de la Mancha', ['Miguel de Cervantes'], 50, 19000, [Genero.NOVELA, Genero.CLASICO], 'Lengua Viva', Idioma.ESPANOL, Encuadernacion.TAPA_DURA, new Date(2015, 0), 1376, 0, '9788420412146.jpg'),
    new Product('9789585581616', 'Cien Años de Soledad', ['Gabriel García Márquez'], 70, 20500, [Genero.NOVELA, Genero.CLASICO], 'Literatura Random House', Idioma.ESPANOL, Encuadernacion.TAPA_DURA, new Date(2021, 0), 400, 20, '9789585581616.jpeg'),
    new Product('9781847498571', '1984', ['George Orwell'], 20, 12000, [Genero.DISTOPIA, Genero.CIENCIA_FICCION], 'Alma classic', Idioma.INGLES, Encuadernacion.TAPA_BLANDA, new Date(2021,0), 400, 0, '9781847498571.jpeg'),
    new Product('9788484284888', 'Orgullo y Prejucio', ['Jane Austen'], 30, 30000, [Genero.ROMANCE, Genero.CLASICO], 'Alba Editorial', Idioma.ESPANOL, Encuadernacion.TAPA_DURA, new Date(2009, 0), 424, 10, '9788484284888.jpeg'),
    new Product('9788445009598', 'El Señor de los Anillos - La Comunidad del Anillo', ['R. R. Tolkien'], 100, 17200, [Genero.FANTASIA, Genero.AVENTURA], 'Minotauro', Idioma.ESPANOL, Encuadernacion.TAPA_BLANDA, new Date(2022, 0), 488, 0, '9788445009598.webp'),
    new Product('9788413417943', 'Nieve, Cristal, Manzanas', ['Neil Gaiman', 'Collen Duran'], 25, 17500, [Genero.FANTASIA, Genero.TERROR], 'Planeta Comic', Idioma.ESPANOL, Encuadernacion.TAPA_DURA, new Date(2021, 0), 72, 0, '9788413417943.jpeg'),
    new Product('9788423352838', 'Mitos Nórdicos', ['Neil Gaiman'], 12, 21500, [Genero.FANTASIA, Genero.HISTORIA], 'Destino', Idioma.ESPANOL, Encuadernacion.TAPA_BLANDA, new Date(2017, 0), 272, 15, '9788423352838.jpeg'),
    new Product('9789873752131', 'De Animales a Dioses', ['Yuval Noah Harari'], 120, 14000, [Genero.HISTORIA], 'Debate', Idioma.ESPANOL, Encuadernacion.TAPA_BLANDA, new Date(2014, 0), 496, 0, '9789873752131.jpeg'),
    new Product('9780156013987', 'Le Petit Prince', ['Antoine De Saint-Exupéry'], 96, 17050, [Genero.INFANTIL, Genero.FILOSOFIA_RELIGION], 'Mariner Books', Idioma.FRANCES, Encuadernacion.TAPA_BLANDA, new Date(2001, 0), 96, 10, '9780156013987.jpeg'),
    new Product('9789585404267', 'Una Educacion', ['Tara Westover'], 8, 22300, [Genero.BIOGRAFIAS], 'Lumen', Idioma.ESPANOL, Encuadernacion.TAPA_BLANDA, new Date(2018, 0), 470, 0, '9789585404267.jpeg'),
    new Product('9789566058885', 'Elogio de la naturaleza', ['Gabriela Mistral'], 25, 11900, [Genero.POESIA], 'Lumen', Idioma.ESPANOL, Encuadernacion.TAPA_BLANDA, new Date(2024, 0), 232, 0, '9789566058885.jpeg'),
    new Product('9789569993060', 'Breves Respuestas a las Grandes Preguntas', ['Stephen Hawking'], 23, 12550, [Genero.CIENCIA_MATEMATICA], 'Crítica', Idioma.ESPANOL, Encuadernacion.TAPA_BLANDA, new Date(2017, 0), 288, 15, '9789569993060.jpeg'),
    new Product('9789569635601', 'Meditaciones', ['Marco Aurelio'], 30, 11500, [Genero.FILOSOFIA_RELIGION, Genero.CLASICO], 'Taurus', Idioma.ESPANOL, Encuadernacion.TAPA_BLANDA, new Date(2021, 0), 176, 0, '9789569635601.jpeg'),
  ]

  // create(createProductDto: CreateProductDto) {
  //   return 'This action adds a new product';
  // }

  // findAll() {
  //   return `This action returns all products`;
  // }

  nombreEpica() {
    return `Este modulo corresponde a la epica "Obtencion de Producto".`;
  }
  
  // findOne(id: number) {
  //   return `This action returns a #${id} product`;
  // }

  applyFilterProducts(filteredProducts: Product[], filters: {
    priceMin?: number;
    priceMax?: number;
    autor?: string;
    nombre?: string;
    rating?: number;
    genero?: string[];
    editorial?: string[];
    idioma?: string[];
    isbn?: string;
    encuadernacion?: Encuadernacion;
    agnoPublicacionMin?: number;
    agnoPublicacionMax?: number;
  }){
    // Filtro autor
    if (filters.autor){
      filteredProducts = filteredProducts.filter( 
        book => book.autor.some(
          autor => autor.toLowerCase().includes(filters.autor.toLowerCase())
        )
      )
    }
    // Filtro nombre
    if (filters.nombre){
      filteredProducts = filteredProducts.filter(
        book => book.nombre.toLowerCase().includes(filters.nombre.toLowerCase())
      );
    }
    // Filtro precio mínimo
    if (filters.priceMin !== undefined){
      filteredProducts = filteredProducts.filter(
        book => book.precio >= filters.priceMin
      )
    }
    // Filtro precio máximo
    if (filters.priceMax !== undefined){
      filteredProducts = filteredProducts.filter(
        book => book.precio <= filters.priceMax
      )
    }
    // Filtro rating
    if (filters.rating !== undefined){
      filteredProducts = filteredProducts.filter(
        book => book.rating >= filters.rating
      )
    }
    // Filtro genero
    if (filters.genero){
      const generos = Array.isArray(filters.genero) ? filters.genero : [filters.genero];
      const generosEnums = generos.map(g => Genero[g as keyof typeof Genero]); // Convertir a enums

      filteredProducts = filteredProducts.filter(
        book => book.genero.some(gen => generosEnums.includes(gen))
        );
    }
    // Filtro editorial
    if (filters.editorial){
      filteredProducts = filteredProducts.filter(
        book => filters.editorial.includes(book.editorial)
        );
    }
    // Filtro idioma
    if (filters.idioma){
      const idiomas = Array.isArray(filters.idioma) ? filters.idioma : [filters.idioma];
      const idiomasEnums = idiomas.map(idioma => Idioma[idioma as keyof typeof Idioma]); // Convertir a enums

      filteredProducts = filteredProducts.filter(
        book => idiomasEnums.includes(book.idioma)
        );
    }
    // Filtro isbn
    if (filters.isbn){
      filteredProducts = filteredProducts.filter(
        book => book.isbn === filters.isbn
      )
    }
    // Filtro encuadernación
    if (filters.encuadernacion){
      filteredProducts = filteredProducts.filter(
        book => book.encuadernacion === filters.encuadernacion
      )
    }
    // Filtro año publicación mínimo
    if (filters.agnoPublicacionMin !== undefined){
      filteredProducts = filteredProducts.filter(
        book => book.agnoPublicacion >= new Date(filters.agnoPublicacionMin, 0)
      )
    }
    // Filtro año publicación máximo
    if (filters.agnoPublicacionMax !== undefined){
      filteredProducts = filteredProducts.filter(
        book => book.agnoPublicacion <= new Date(filters.agnoPublicacionMax, 0)
      )
    }

    return filteredProducts;
  }

  sortProducts(filteredProducts: Product[], filters: {
    sortBy?: string;
  }){
    if (filters.sortBy){
      filteredProducts = filteredProducts.sort(
        (a, b) => a[filters.sortBy] > b[filters.sortBy] ? 1 : -1,
      )
    }
    return filteredProducts;
  }

  paginationProducts(filteredProducts: Product[], filters: {
    limit?: number;
    offset?: number;
  }){
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
    genero?: string[];
    editorial?: string[];
    idioma?: string[];
    isbn?: string;
    encuadernacion?: Encuadernacion;
    agnoPublicacionMin?: number;
    agnoPublicacionMax?: number;
  }){
    let filteredProducts = this.products;

    // Aplicar filtros
    filteredProducts = this.applyFilterProducts(filteredProducts, filters);
    
    // Ordenar
    filteredProducts = this.sortProducts(filteredProducts, filters);

    // Paginación
    filteredProducts = this.paginationProducts(filteredProducts, filters);

    // Gestión de errores
    if (!filteredProducts){
      throw new ErrorStatus('No existen productos que cumplan la solicitud', 404)
    }

    return filteredProducts;
  }
  
  getSearchedProductos(query: string, filters: {
    priceMin?: number;
    priceMax?: number;
    limit?: number;
    offset?: number;
    sortBy?: string;
    autor?: string;
    rating?: number;
    genero?: string[];
    editorial?: string[];
    idioma?: string[];
    encuadernacion?: Encuadernacion;
    agnoPublicacionMin?: number;
    agnoPublicacionMax?: number;
  }){
    let filteredProducts = this.products;

    // Filtro por solicitud
    filteredProducts = filteredProducts.filter( 
      book => 
        book.autor.some(autor => autor.toLowerCase().includes(query.toLowerCase()))
        || book.nombre.toLowerCase().includes(query.toLowerCase())
        || book.isbn === query
      )
    // Aplicar filtros
    filteredProducts = this.applyFilterProducts(filteredProducts, filters);
    
    // Ordenar
    filteredProducts = this.sortProducts(filteredProducts, filters);

    // Paginación
    filteredProducts = this.paginationProducts(filteredProducts, filters);

    // Gestión de errores
    if (!filteredProducts){
      throw new ErrorStatus('No existen productos que cumplan la solicitud', 404)
    }

    return filteredProducts;
  }
  
  // update(id: number, updateProductDto: UpdateProductDto) {
  //   return `This action updates a #${id} product`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} product`;
  // }
}
