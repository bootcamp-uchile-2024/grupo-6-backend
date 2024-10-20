import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { Encuadernacion } from './entities/encuadernacion';
import { ProductDTO } from './dto/product.dto';
import { proConexDTO } from './dto/proConexDTO';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    create(createProductDto: CreateProductDto): CreateProductDto;
    getFilteredProducts(priceMin?: number, priceMax?: number, limit?: number, offset?: number, sortBy?: string, autor?: string, nombre?: string, rating?: number, genero?: string | string[], editorial?: string | string[], idioma?: string | string[], isbn?: string, encuadernacion?: Encuadernacion, agnoPublicacionMin?: number, agnoPublicacionMax?: number): ProductDTO[];
    getSearchedProducts(query: string, priceMin?: number, priceMax?: number, limit?: number, offset?: number, sortBy?: string, autor?: string, rating?: number, genero?: string | string[], editorial?: string | string[], idioma?: string | string[], encuadernacion?: Encuadernacion, agnoPublicacionMin?: number, agnoPublicacionMax?: number): ProductDTO[];
    findOne(isbn: string): ProductDTO;
    getGenres(): string[];
    getConexion(): Promise<proConexDTO[]>;
}
