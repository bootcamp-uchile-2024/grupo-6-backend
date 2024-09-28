import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './entities/product.entity';
import { Genero } from './entities/genero';
import { Encuadernacion } from './entities/encuadernacion';
export declare class ProductsService {
    products: Product[];
    create(createProductDto: CreateProductDto): string;
    nombreEpica(): string;
    findOne(isbn: string): Product;
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
        limit?: number;
        offset?: number;
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
    }): Product[];
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
    }): Product[];
    getGenres(): Genero[];
}
