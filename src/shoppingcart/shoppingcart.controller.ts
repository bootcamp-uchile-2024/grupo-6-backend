import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  NotFoundException,
  ParseIntPipe,
} from '@nestjs/common';
import { ShoppingcartService } from './shoppingcart.service';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateProductDto } from 'src/products/dto/create-product.dto';

@Controller('shoppingcart')
export class ShoppingcartController {
  constructor(
    private readonly shoppingcartService: ShoppingcartService,
  ) {}

  @ApiTags('Shopping cart')
  @ApiBody({
    type: CreateProductDto,
    description: 'Datos del libro que se va a cargar al carrito de compras',
  })
  @ApiResponse({
    status: 201,
    description: 'Producto agregado a carrito de compras',
  })
  @Post()
  create(
    @Body() createProductDto: CreateProductDto,
  ) {
    return this.shoppingcartService.create(createProductDto);
  }
  @ApiTags('Shopping cart')
  @ApiResponse({ status: 200, description: 'Obtención de carrito de compras' })
  @ApiResponse({
    status: 404,
    description: 'No se puede obtener carrito de compras',
  })
  @Get()
  obtenerProductos() {
    const encontrado = this.shoppingcartService.obtenerProductos();
    return encontrado;
  }  
  @ApiTags('Shopping cart')
  @ApiResponse({
    status: 200,
    description: 'Producto eliminado del carrito de compra',
  })
  @ApiResponse({
    status: 404,
    description: 'Producto no existe en el carrito de compra',
  })
  @Delete(':item')
  remove(
    @Param(
      'item',
      new ParseIntPipe({ errorHttpStatusCode: 400, optional: true }),
    )
    item: number,
  ) {
    const encontrado = this.shoppingcartService.remove(item);
    if (encontrado) {
      return 'Producto eliminado del carrito de compra';
    } else {
      throw new NotFoundException();
    }
  }
}
