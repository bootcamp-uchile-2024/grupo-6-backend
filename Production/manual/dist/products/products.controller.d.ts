import { CreateProductDto } from './dto/create-product.dto';
import { proConexDTO } from './dto/proConexDTO';
import { ProductDTO } from './dto/product.dto';
import { Encuadernacion } from './entities/encuadernacion';
import { ProductsService } from './products.service';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    create(createProductDto: CreateProductDto): CreateProductDto;
    getFilteredProducts(priceMin?: number, priceMax?: number, limit?: number, offset?: number, sortBy?: string, autor?: string, nombre?: string, rating?: number, genero?: string | string[], editorial?: string | string[], idioma?: string | string[], isbn?: string, encuadernacion?: Encuadernacion, agnoPublicacionMin?: number, agnoPublicacionMax?: number): Promise<ProductDTO[]>;
    getSearchedProducts(query: string, priceMin?: number, priceMax?: number, limit?: number, offset?: number, sortBy?: string, autor?: string, rating?: number, genero?: string | string[], editorial?: string | string[], idioma?: string | string[], encuadernacion?: Encuadernacion, agnoPublicacionMin?: number, agnoPublicacionMax?: number): ProductDTO[];
    findOne(isbn: string): Promise<ProductDTO>;
    getGenres(): string[];
    getConexion(): Promise<proConexDTO[]>;
}
