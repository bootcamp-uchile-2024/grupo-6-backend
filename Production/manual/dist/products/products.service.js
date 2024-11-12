"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const product_entity_1 = require("./entities/product.entity");
const generoEnum_1 = require("./entities/generoEnum");
const idioma_1 = require("./entities/idioma");
const encuadernacion_1 = require("./entities/encuadernacion");
const errorStatus_1 = require("./errorStatus");
const get_product_dto_1 = require("./dto/get-product.dto");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const proConexDTO_1 = require("./dto/proConexDTO");
const libro_1 = require("../orm/entity/libro");
const libro_mapper_1 = require("./mappers/libro.mapper");
let ProductsService = class ProductsService {
    constructor(dataSource, productRepository) {
        this.dataSource = dataSource;
        this.productRepository = productRepository;
        this.proConex = [];
        this.products = [
            new product_entity_1.Product('9788420412146', 'Don Quijote de la Mancha', ['Miguel de Cervantes'], 50, 19000, [generoEnum_1.GeneroEnum.NOVELA, generoEnum_1.GeneroEnum.CLASICO], 'Lengua Viva', idioma_1.Idioma.ESPANOL, encuadernacion_1.Encuadernacion.TAPA_DURA, new Date(2015, 0), 1376, 0, '9788420412146.jpg', '15cm x 25cm', '978-8-42-041214-6', 'La obra maestra de Miguel de Cervantes narra las aventuras de Alonso Quijano, quien, tras leer muchos libros de caballerías, decide convertirse en un caballero andante, Don Quijote. Acompañado por su fiel escudero Sancho Panza, busca revivir la caballería en un mundo moderno. Es una sátira profunda sobre la realidad y la ficción, y un clásico de la literatura universal.'),
            new product_entity_1.Product('9789585581616', 'Cien Años de Soledad', ['Gabriel García Márquez'], 70, 20500, [generoEnum_1.GeneroEnum.NOVELA, generoEnum_1.GeneroEnum.CLASICO], 'Literatura Random House', idioma_1.Idioma.ESPANOL, encuadernacion_1.Encuadernacion.TAPA_DURA, new Date(2021, 0), 400, 20, '9789585581616.jpeg', '13cm x 25cm', '978-9-58-558161-6', 'Gabriel García Márquez cuenta la historia de la familia Buendía en el mítico pueblo de Macondo. Con un estilo de realismo mágico, explora temas como el destino, la soledad y los ciclos de la vida. La novela es un referente del boom latinoamericano y una de las más importantes del siglo XX.'),
            new product_entity_1.Product('9781847498571', '1984', ['George Orwell'], 20, 12000, [generoEnum_1.GeneroEnum.DISTOPIA, generoEnum_1.GeneroEnum.CIENCIA_FICCION], 'Alma classic', idioma_1.Idioma.INGLES, encuadernacion_1.Encuadernacion.TAPA_BLANDA, new Date(2021, 0), 400, 0, '9781847498571.jpeg', '15cm x 20cm', '978-1-84-749857-1', 'George Orwell presenta una sociedad distópica controlada por el Estado totalitario liderado por el Gran Hermano. Winston Smith, el protagonista, lucha por su libertad y por descubrir la verdad en un mundo de vigilancia y manipulación constante. Es un alegato contra el autoritarismo y la pérdida de libertad individual.'),
            new product_entity_1.Product('9788484284888', 'Orgullo y Prejucio', ['Jane Austen'], 30, 30000, [generoEnum_1.GeneroEnum.ROMANCE, generoEnum_1.GeneroEnum.CLASICO], 'Alba Editorial', idioma_1.Idioma.ESPANOL, encuadernacion_1.Encuadernacion.TAPA_DURA, new Date(2009, 0), 424, 10, '9788484284888.jpeg', '14cm x 21cm', '978-8-48-428488-8', 'En este clásico de Jane Austen, Elizabeth Bennet navega las presiones sociales y familiares para encontrar el amor verdadero. Su historia con el orgulloso Sr. Darcy revela las complejidades de las primeras impresiones y las dinámicas sociales en la Inglaterra del siglo XIX. Es una de las novelas románticas más influyentes de la historia.'),
            new product_entity_1.Product('9788445009598', 'El Señor de los Anillos - La Comunidad del Anillo', ['R. R. Tolkien'], 100, 17200, [generoEnum_1.GeneroEnum.FANTASIA, generoEnum_1.GeneroEnum.AVENTURA], 'Minotauro', idioma_1.Idioma.ESPANOL, encuadernacion_1.Encuadernacion.TAPA_BLANDA, new Date(2022, 0), 488, 0, '9788445009598.webp', '14cm x 25cm', '978-8-44-500959-8', 'La primera parte de la trilogía de J.R.R. Tolkien sigue a Frodo Bolsón, quien debe destruir el Anillo Único para evitar que Sauron, el Señor Oscuro, lo use para dominar la Tierra Media. Frodo es acompañado por una comunidad de héroes. Es una de las obras fundacionales del género de fantasía épica.'),
            new product_entity_1.Product('9788413417943', 'Nieve, Cristal, Manzanas', ['Neil Gaiman', 'Collen Duran'], 25, 17500, [generoEnum_1.GeneroEnum.FANTASIA, generoEnum_1.GeneroEnum.TERROR], 'Planeta Comic', idioma_1.Idioma.ESPANOL, encuadernacion_1.Encuadernacion.TAPA_DURA, new Date(2021, 0), 72, 0, '9788413417943.jpeg', '15cm x 22cm', '978-8-41-341794-3', 'Neil Gaiman y Colleen Duran ofrecen una reinterpretación oscura del cuento de Blancanieves desde la perspectiva de la madrastra. La historia explora temas de belleza, envejecimiento y traición. Este relato gráfico es una combinación única de fantasía y horror.'),
            new product_entity_1.Product('9788423352838', 'Mitos Nórdicos', ['Neil Gaiman'], 12, 21500, [generoEnum_1.GeneroEnum.FANTASIA, generoEnum_1.GeneroEnum.HISTORIA], 'Destino', idioma_1.Idioma.ESPANOL, encuadernacion_1.Encuadernacion.TAPA_BLANDA, new Date(2017, 0), 272, 15, '9788423352838.jpeg', '15cm x 22cm', '978-8-42-335283-8', 'Neil Gaiman recrea los mitos nórdicos, desde la creación del mundo hasta el Ragnarok, el fin de los tiempos. Presenta a dioses como Odin, Thor y Loki con un estilo accesible y moderno. Es una obra que invita a conocer más sobre la mitología escandinava.'),
            new product_entity_1.Product('9789873752131', 'De Animales a Dioses', ['Yuval Noah Harari'], 120, 14000, [generoEnum_1.GeneroEnum.HISTORIA], 'Debate', idioma_1.Idioma.ESPANOL, encuadernacion_1.Encuadernacion.TAPA_BLANDA, new Date(2014, 0), 496, 0, '9789873752131.jpeg', '15cm x 22cm', '978-9-87-375213-1', 'Yuval Noah Harari analiza la evolución de la humanidad desde los primeros homínidos hasta el presente. Explora cómo los humanos han dominado el mundo a través de la cultura, la religión y la ciencia. Es un libro de historia que mezcla ciencia, filosofía y reflexiones sobre el futuro.'),
            new product_entity_1.Product('9780156013987', 'Le Petit Prince', ['Antoine De Saint-Exupéry'], 96, 17050, [generoEnum_1.GeneroEnum.INFANTIL, generoEnum_1.GeneroEnum.FILOSOFIA], 'Mariner Books', idioma_1.Idioma.FRANCES, encuadernacion_1.Encuadernacion.TAPA_BLANDA, new Date(2001, 0), 96, 10, '9780156013987.jpeg', '12cm x 20cm', '978-0-15-601398-7', 'Antoine de Saint-Exupéry relata las aventuras de un joven príncipe que viaja entre planetas, aprendiendo sobre la vida, el amor y la soledad. Aunque es un cuento infantil, tiene profundas reflexiones filosóficas. Es uno de los libros más traducidos y leídos en el mundo.'),
            new product_entity_1.Product('9789585404267', 'Una Educacion', ['Tara Westover'], 8, 22300, [generoEnum_1.GeneroEnum.BIOGRAFIAS], 'Lumen', idioma_1.Idioma.ESPANOL, encuadernacion_1.Encuadernacion.TAPA_BLANDA, new Date(2018, 0), 470, 0, '9789585404267.jpeg', '13.5cm x 21cm', '978-9-58-540426-7', 'Tara Westover narra sus memorias sobre crecer en una familia mormona radical en Idaho, sin educación formal hasta los 17 años. A pesar de los obstáculos, logra acceder a la universidad y transformar su vida. Es una historia de superación, educación y la búsqueda de la identidad.'),
            new product_entity_1.Product('9789566058885', 'Elogio de la naturaleza', ['Gabriela Mistral'], 25, 11900, [generoEnum_1.GeneroEnum.POESIA], 'Lumen', idioma_1.Idioma.ESPANOL, encuadernacion_1.Encuadernacion.TAPA_BLANDA, new Date(2024, 0), 232, 0, '9789566058885.jpeg', '14cm x 24cm', '978-9-56-605888-5', 'Gabriela Mistral recopila en esta obra sus poemas dedicados a la naturaleza y la conexión espiritual con el mundo natural. A través de sus versos, celebra la belleza y las fuerzas elementales de la vida. Es una obra que muestra su sensibilidad y amor por el paisaje y lo simple.'),
            new product_entity_1.Product('9789569993060', 'Breves Respuestas a las Grandes Preguntas', ['Stephen Hawking'], 23, 12550, [generoEnum_1.GeneroEnum.CIENCIA_MATEMATICA], 'Crítica', idioma_1.Idioma.ESPANOL, encuadernacion_1.Encuadernacion.TAPA_BLANDA, new Date(2017, 0), 288, 15, '9789569993060.jpeg', '14cm x 23cm', '978-9-56-999306-0', 'Stephen Hawking explora algunas de las grandes incógnitas de la humanidad, como el origen del universo, la posibilidad de vida extraterrestre y el futuro de la inteligencia artificial. Expone estas ideas complejas de manera accesible. Es un libro que invita a la reflexión científica y filosófica.'),
            new product_entity_1.Product('9789569635601', 'Meditaciones', ['Marco Aurelio'], 30, 11500, [generoEnum_1.GeneroEnum.FILOSOFIA, generoEnum_1.GeneroEnum.CLASICO], 'Taurus', idioma_1.Idioma.ESPANOL, encuadernacion_1.Encuadernacion.TAPA_BLANDA, new Date(2021, 0), 176, 0, '9789569635601.jpeg', '15cm x 21cm', '978-9-56-963560-1', 'En esta obra, Marco Aurelio, emperador romano y filósofo estoico, reflexiona sobre la vida, el destino y la virtud. Es un texto introspectivo que ofrece lecciones sobre cómo vivir en armonía con el mundo y con uno mismo. Su filosofía estoica ha influido en generaciones de lectores.'),
        ];
    }
    create(createProductDto) {
        let product = new product_entity_1.Product(createProductDto.isbn, createProductDto.nombre, createProductDto.autor, createProductDto.stockLibro, createProductDto.precio, createProductDto.genero, createProductDto.editorial, createProductDto.idioma, createProductDto.encuadernacion, createProductDto.agnoPublicacion, createProductDto.numeroPaginas, createProductDto.descuento, createProductDto.caratula, createProductDto.dimensiones, createProductDto.ean, createProductDto.resumen);
        this.products.push(product);
        console.log(this.products.map(p => p.isbn));
        return createProductDto;
    }
    async getConexion() {
        const conexionBD = "SELECT isbn, nombre, precio FROM libro;";
        const result = await this.dataSource.query(conexionBD);
        for (const productoFila of result) {
            const proDTO = new proConexDTO_1.proConexDTO();
            proDTO.isbn = productoFila.isbn;
            proDTO.nombre = productoFila.nombre;
            proDTO.precio = productoFila.precio;
            this.proConex.push(proDTO);
        }
        return this.proConex;
    }
    async findOne(isbn) {
        const producto = await this.productRepository.findOne({
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
        });
        return libro_mapper_1.LibroMapper.entityToDto(producto);
    }
    applyFilterProducts(filteredProducts, filters) {
        if (filters.autor) {
            filteredProducts = filteredProducts.filter((book) => book.autor.some((autor) => autor.toLowerCase().includes(filters.autor.toLowerCase())));
        }
        if (filters.nombre) {
            filteredProducts = filteredProducts.filter((book) => book.nombre.toLowerCase().includes(filters.nombre.toLowerCase()));
        }
        if (filters.priceMin !== undefined) {
            filteredProducts = filteredProducts.filter((book) => book.precio >= filters.priceMin);
        }
        if (filters.priceMax !== undefined) {
            filteredProducts = filteredProducts.filter((book) => book.precio <= filters.priceMax);
        }
        if (filters.rating !== undefined) {
            filteredProducts = filteredProducts.filter((book) => book.rating >= filters.rating);
        }
        if (filters.genero !== undefined) {
            filteredProducts = filteredProducts.filter((book) => book.genero.some((gen) => filters.genero.includes(gen)));
        }
        if (filters.editorial) {
            filteredProducts = filteredProducts.filter((book) => filters.editorial.includes(book.editorial));
        }
        if (filters.idioma) {
            filteredProducts = filteredProducts.filter((book) => filters.idioma.includes(book.idioma));
        }
        if (filters.isbn) {
            filteredProducts = filteredProducts.filter((book) => book.isbn === filters.isbn);
        }
        if (filters.encuadernacion) {
            filteredProducts = filteredProducts.filter((book) => book.encuadernacion === filters.encuadernacion);
        }
        if (filters.agnoPublicacionMin !== undefined) {
            filteredProducts = filteredProducts.filter((book) => book.agnoPublicacion >= new Date(filters.agnoPublicacionMin, 0));
        }
        if (filters.agnoPublicacionMax !== undefined) {
            filteredProducts = filteredProducts.filter((book) => book.agnoPublicacion <= new Date(filters.agnoPublicacionMax, 0));
        }
        return filteredProducts;
    }
    sortProducts(filteredProducts, filters) {
        if (filters.sortBy) {
            filteredProducts = filteredProducts.sort((a, b) => a[filters.sortBy] > b[filters.sortBy] ? 1 : -1);
        }
        return filteredProducts;
    }
    paginationProducts(filteredProducts, filters) {
        const offset = filters.offset || 0;
        const limit = filters.limit || filteredProducts.length;
        return filteredProducts.slice(offset, offset + limit);
    }
    async getFilteredProducts(filters) {
        let condiciones = {};
        if (filters.nombre) {
            condiciones.nombre = (0, typeorm_2.Like)(`%${filters.nombre}%`);
        }
        if (filters.rating !== undefined) {
            condiciones.rating = (0, typeorm_2.MoreThanOrEqual)(filters.rating);
        }
        const priceMin = filters.priceMin ? filters.priceMin : -1e6;
        const priceMax = filters.priceMax ? filters.priceMax : 1e6;
        if (filters.priceMin !== undefined || filters.priceMax !== undefined) {
            condiciones.precio = (0, typeorm_2.Between)(priceMin, priceMax);
        }
        if (filters.isbn) {
            condiciones.isbn = filters.isbn;
        }
        const agnoMin = filters.agnoPublicacionMin ? filters.agnoPublicacionMin : -1e6;
        const agnoMax = filters.agnoPublicacionMax ? filters.agnoPublicacionMax : 1e6;
        if (filters.agnoPublicacionMin !== undefined || filters.agnoPublicacionMax !== undefined) {
            condiciones.agno_publicacion = (0, typeorm_2.Between)(agnoMin, agnoMax);
        }
        ;
        if (filters.autor) {
            condiciones.autores = {
                nombre: (0, typeorm_2.Like)(`%${filters.autor}%`)
            };
        }
        if (filters.editorial) {
            condiciones.editorial = {
                descripcion: (0, typeorm_2.Like)(`%${filters.editorial}%`)
            };
        }
        if (filters.idioma) {
            condiciones.idiomaLibro = {
                descripcion: filters.idioma
            };
        }
        if (filters.encuadernacion) {
            condiciones.encuadernacion = {
                descripcion: filters.encuadernacion
            };
        }
        if (filters.genero !== undefined) {
            condiciones.generos = {
                descripcion: filters.genero
            };
        }
        let orderBy = {};
        if (filters.sortBy) {
            orderBy = {
                [filters.sortBy]: 'ASC'
            };
        }
        const nroPaginaValido = (filters.pagina - 1);
        const offset = filters.cantidad * nroPaginaValido;
        const results = await this.productRepository.findAndCount({
            relations: {
                editorial: true,
                idiomaLibro: true,
                encuadernacion: true,
                generos: true,
                autores: true
            },
            where: { ...condiciones, },
            order: orderBy,
            take: filters.cantidad,
            skip: offset
        });
        const products = results[0];
        const totalProductos = results[1];
        if (!products) {
            throw new errorStatus_1.ErrorStatus('No existen productos que cumplan la solicitud', 404);
        }
        const productsDto = libro_mapper_1.LibroMapper.entityListToDtoList(products);
        return libro_mapper_1.LibroMapper.entityToDtoPaginacion(productsDto, totalProductos, filters.cantidad, filters.pagina);
    }
    getSearchedProductos(query, filters) {
        let filteredProducts = this.products;
        filteredProducts = filteredProducts.filter((book) => book.autor.some((autor) => autor.toLowerCase().includes(query.toLowerCase())) ||
            book.nombre.toLowerCase().includes(query.toLowerCase()) ||
            book.isbn === query);
        filteredProducts = this.applyFilterProducts(filteredProducts, filters);
        filteredProducts = this.sortProducts(filteredProducts, filters);
        filteredProducts = this.paginationProducts(filteredProducts, filters);
        if (filteredProducts.length == 0) {
            throw new errorStatus_1.ErrorStatus('No existen productos que cumplan la solicitud', 404);
        }
        return filteredProducts.map(product => new get_product_dto_1.GetProductDto(product));
    }
    getGenres() {
        return Object.values(generoEnum_1.GeneroEnum);
    }
    async update(libro, updateProductDto) {
        console.log(updateProductDto.autor);
        let condiciones = {};
        if (updateProductDto.nombre) {
            condiciones.nombre = updateProductDto.nombre;
        }
        if (updateProductDto.stock_libro) {
            condiciones.stock_libro = updateProductDto.stock_libro;
        }
        if (updateProductDto.precio) {
            condiciones.precio = updateProductDto.precio;
        }
        if (updateProductDto.rating) {
            condiciones.rating = updateProductDto.rating;
        }
        if (updateProductDto.id_editorial) {
            condiciones.id_editorial = updateProductDto.id_editorial;
        }
        if (updateProductDto.id_idioma) {
            condiciones.id_idioma = updateProductDto.id_idioma;
        }
        if (updateProductDto.id_encuadernacion) {
            condiciones.id_encuadernacion = updateProductDto.id_encuadernacion;
        }
        if (updateProductDto.agno_publicacion) {
            condiciones.agno_publicacion = updateProductDto.agno_publicacion;
        }
        if (updateProductDto.numero_paginas) {
            condiciones.numero_paginas = updateProductDto.numero_paginas;
        }
        if (updateProductDto.descuento) {
            condiciones.descuento = updateProductDto.descuento;
        }
        if (updateProductDto.caratula) {
            condiciones.caratula = updateProductDto.caratula;
        }
        if (updateProductDto.dimensiones) {
            condiciones.dimensiones = updateProductDto.dimensiones;
        }
        if (updateProductDto.codigo_barra) {
            condiciones.codigo_barra = updateProductDto.codigo_barra;
        }
        if (updateProductDto.resumen) {
            condiciones.resumen = updateProductDto.resumen;
        }
        console.log(condiciones);
        await this.productRepository.update({ id: libro.id, }, condiciones);
        return await this.productRepository.findOneBy({ id: libro.id });
    }
};
exports.ProductsService = ProductsService;
exports.ProductsService = ProductsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectDataSource)()),
    __param(1, (0, typeorm_1.InjectRepository)(libro_1.Libro)),
    __metadata("design:paramtypes", [typeorm_2.DataSource,
        typeorm_2.Repository])
], ProductsService);
//# sourceMappingURL=products.service.js.map