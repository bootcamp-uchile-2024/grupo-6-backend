import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { Genero } from './entities/genero';
import { Encuadernacion } from './entities/encuadernacion';
import { Product } from './entities/product.entity';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    create(createProductDto: CreateProductDto): string;
    getFilteredProducts(priceMin?: number, priceMax?: number, limit?: number, offset?: number, sortBy?: string, autor?: string, nombre?: string, rating?: number, genero?: string | string[], editorial?: string | string[], idioma?: string | string[], isbn?: string, encuadernacion?: Encuadernacion, agnoPublicacionMin?: number, agnoPublicacionMax?: number): Product[];
    getSearchedProducts(query: string, priceMin?: number, priceMax?: number, limit?: number, offset?: number, sortBy?: string, autor?: string, rating?: number, genero?: string | string[], editorial?: string | string[], idioma?: string | string[], encuadernacion?: Encuadernacion, agnoPublicacionMin?: number, agnoPublicacionMax?: number): Product[];
    findOne(isbn: string): Product;
    getGenres(): Genero[];
}
