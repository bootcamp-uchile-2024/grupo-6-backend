import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { Encuadernacion } from './entities/encuadernacion';
import { GetProductDto } from './dto/get-product.dto';
import { DataSource, Repository } from 'typeorm';
import { proConexDTO } from './dto/proConexDTO';
import { Libro } from 'src/orm/entity/libro';
import { GetFilteredProductsDto } from './dto/get-filtered-products.dto';
export declare class ProductsService {
    private readonly dataSource;
    private readonly productRepository;
    constructor(dataSource: DataSource, productRepository: Repository<Libro>);
    proConex: proConexDTO[];
    products: Product[];
    create(createProductDto: CreateProductDto): CreateProductDto;
    getConexion(): Promise<proConexDTO[]>;
    findOne(isbn: string): Promise<GetProductDto>;
    applyFilterProducts(filteredProducts: Product[], filters: {
        priceMin?: number;
        priceMax?: number;
        autor?: string;
        nombre?: string;
        rating?: number;
        genero?: any;
        editorial?: any;
        idioma?: any;
        isbn?: string;
        encuadernacion?: Encuadernacion;
        agnoPublicacionMin?: number;
        agnoPublicacionMax?: number;
    }): Product[];
    sortProducts(filteredProducts: Product[], filters: {
        sortBy?: string;
    }): Product[];
    paginationProducts(filteredProducts: Product[], filters: {
        limit?: number;
        offset?: number;
    }): Product[];
    getFilteredProducts(filters: {
        priceMin?: number;
        priceMax?: number;
        pagina?: number;
        cantidad?: number;
        sortBy?: string;
        autor?: string;
        nombre?: string;
        rating?: number;
        genero?: any;
        editorial?: string[];
        idioma?: any;
        isbn?: string;
        encuadernacion?: Encuadernacion;
        agnoPublicacionMin?: number;
        agnoPublicacionMax?: number;
    }): Promise<GetFilteredProductsDto>;
    getSearchedProductos(query: string, filters: {
        priceMin?: number;
        priceMax?: number;
        limit?: number;
        offset?: number;
        sortBy?: string;
        autor?: string;
        rating?: number;
        genero?: any;
        editorial?: any;
        idioma?: any;
        encuadernacion?: Encuadernacion;
        agnoPublicacionMin?: number;
        agnoPublicacionMax?: number;
    }): GetProductDto[];
    getGenres(): string[];
    update(libro: Libro, updateProductDto: UpdateProductDto): Promise<Libro>;
}
