import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  NotFoundException,
  ParseIntPipe,
  Put,
} from '@nestjs/common';
import { ShoppingcartService } from './shoppingcart.service';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateProductDto } from 'src/products/dto/create-product.dto';
import { ShoppingcartSalidaDto } from './dto/create-shoppingcart.salida.dto';
import { CreateShoppingcartDto } from './dto/create-shoppingcart.dto';
import { ShoppingcartUpdateDto } from './dto/shoppingcart.update.dto';

@Controller('shoppingcart')
export class ShoppingcartController {


  constructor(
    private readonly shoppingcartService: ShoppingcartService,
  ) {}


  @ApiTags('Shopping cart')
  @ApiBody({
    type: CreateShoppingcartDto,
    description: 'Datos del libro que se va a cargar al carrito de compras',
  })
  @ApiResponse({
    status: 201,
    description: 'Producto agregado a carrito de compras',
  })
  @Post()
  async create(
    @Body() createShoppingcartDto: CreateShoppingcartDto,
  ): Promise <ShoppingcartSalidaDto> {
    return await this.shoppingcartService.create(createShoppingcartDto);
  }


  @ApiTags('Shopping cart')
  @ApiResponse({ status: 200, description: 'Obtención de carrito de compras' })
  @ApiResponse({
    status: 404,
    description: 'No se puede obtener carrito de compras',
  })
  @Get()
  async obtenerCarrito(): Promise <ShoppingcartSalidaDto[]> {
    return await this.shoppingcartService.obtenerCarrito();
  }


  @ApiTags('Shopping cart')
  @ApiResponse({ status: 200, description: 'Obtención de carrito de compras' })
  @ApiResponse({
    status: 404,
    description: 'No se puede obtener carrito de compras',
  })
  @Put()
  async cantidadMasMenos(@Body() updateDto: ShoppingcartUpdateDto): Promise<void> {
    return await this.shoppingcartService.cantidadMasMenos(updateDto);
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
  @Delete(':id')
  async remove(
    @Param(
      'id',
      new ParseIntPipe({ errorHttpStatusCode: 400, optional: true }),
    )
    id: number,
  ): Promise <ShoppingcartSalidaDto[]> {
    const encontrado = await this.shoppingcartService.remove(id);
    if (encontrado) {
      return encontrado;
    } else {
      throw new NotFoundException();
    }
  }
}
