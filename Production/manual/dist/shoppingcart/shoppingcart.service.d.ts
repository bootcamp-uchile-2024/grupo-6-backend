import { Shoppingcart } from './entities/shoppingcart.entity';
import { ProductsService } from 'src/products/products.service';
import { CreateProductDto } from 'src/products/dto/create-product.dto';
export declare class ShoppingcartService {
    private readonly productsService;
    constructor(productsService: ProductsService);
    shoppingcart: Shoppingcart[];
    create(createProductotDto: CreateProductDto): Shoppingcart[];
    obtenerProductos(): Shoppingcart[];
    remove(item: number): Shoppingcart;
}
