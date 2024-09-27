import { ShoppingcartService } from './shoppingcart.service';
import { ProductsService } from 'src/products/products.service';
import { CreateProductDto } from 'src/products/dto/create-product.dto';
export declare class ShoppingcartController {
    private readonly shoppingcartService;
    private readonly productService;
    constructor(shoppingcartService: ShoppingcartService, productService: ProductsService);
    create(createProductDto: CreateProductDto): import("./entities/shoppingcart.entity").Shoppingcart[];
    obtenerProductos(): import("./entities/shoppingcart.entity").Shoppingcart[];
    remove(item: number): string;
}
