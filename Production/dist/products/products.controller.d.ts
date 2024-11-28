import { Libro } from 'src/orm/entity/libro';
import { GetFilteredProductsDto } from './dto/get-filtered-products.dto';
import { GetProductDto } from './dto/get-product.dto';
import { proConexDTO } from './dto/proConexDTO';
import { UpdateProductDto } from './dto/update-product.dto';
import { EncuadernacionEnum } from './entities/encuadernacionEnum';
import { ProductsService } from './products.service';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    create(createProductDto: any, caratula: any): Promise<any>;
    getFilteredProducts(priceMin?: number, priceMax?: number, pagina?: number, cantidad?: number, sortBy?: string, autor?: string, nombre?: string, rating?: number, genero?: string | string[], editorial?: string | string[], idioma?: string | string[], isbn?: string, encuadernacion?: EncuadernacionEnum, agnoPublicacionMin?: number, agnoPublicacionMax?: number): Promise<GetFilteredProductsDto>;
    getSearchedProducts(query: string, priceMin?: number, priceMax?: number, limit?: number, offset?: number, sortBy?: string, autor?: string, rating?: number, genero?: string | string[], editorial?: string | string[], idioma?: string | string[], encuadernacion?: EncuadernacionEnum, agnoPublicacionMin?: number, agnoPublicacionMax?: number): GetProductDto[];
    findOne(isbn: string): Promise<GetProductDto>;
    getGenres(): Promise<string[]>;
    getConexion(): Promise<proConexDTO[]>;
    remove(id: string): Promise<string>;
    update(id: Libro, updatePurchaseDto: UpdateProductDto, caratula?: any): Promise<GetProductDto>;
}
