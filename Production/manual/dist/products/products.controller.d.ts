import { CreateProductDto } from './dto/create-product.dto';
import { proConexDTO } from './dto/proConexDTO';
import { GetProductDto } from './dto/get-product.dto';
import { Encuadernacion } from './entities/encuadernacion';
import { ProductsService } from './products.service';
import { GetFilteredProductsDto } from './dto/get-filtered-products.dto';
import { Libro } from 'src/orm/entity/libro';
import { UpdateProductDto } from './dto/update-product.dto';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    create(createProductDto: CreateProductDto): CreateProductDto;
    getFilteredProducts(priceMin?: number, priceMax?: number, pagina?: number, cantidad?: number, sortBy?: string, autor?: string, nombre?: string, rating?: number, genero?: string | string[], editorial?: string | string[], idioma?: string | string[], isbn?: string, encuadernacion?: Encuadernacion, agnoPublicacionMin?: number, agnoPublicacionMax?: number): Promise<GetFilteredProductsDto>;
    getSearchedProducts(query: string, priceMin?: number, priceMax?: number, limit?: number, offset?: number, sortBy?: string, autor?: string, rating?: number, genero?: string | string[], editorial?: string | string[], idioma?: string | string[], encuadernacion?: Encuadernacion, agnoPublicacionMin?: number, agnoPublicacionMax?: number): GetProductDto[];
    findOne(isbn: string): Promise<GetProductDto>;
    getGenres(): string[];
    getConexion(): Promise<proConexDTO[]>;
    update(id: Libro, updatePurchaseDto: UpdateProductDto): Promise<Libro>;
}
