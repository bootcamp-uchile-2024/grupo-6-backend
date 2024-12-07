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
  @ApiBody({
    type: CreateShoppingcartDto,
    description: 'Datos del libros que se va a cargar al carrito de compras',
  })
  @ApiResponse({
    status: 201,
    description: 'Productos agregado a carrito de compras',
  })
  @Post()
  async createlibros(@Body() createShoppingcartDto: CreateShoppingcartDto[]): Promise <ShoppingcartSalidaDto[]> {
    return await this.shoppingcartService.createlibros(createShoppingcartDto);
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
    description: 'Carrito de compra eliminado',
  })
  @ApiResponse({
    status: 404,
    description: 'Carrito de compra no existe',
  })
  @Delete(':id')
  async removecarrito(
    @Param(
      'id',
      new ParseIntPipe({ errorHttpStatusCode: 400, optional: true }),
    )
    id: number,
  ): Promise <ShoppingcartSalidaDto[]> {
    const encontrado = await this.shoppingcartService.removecarrito(id);
    if (encontrado) {
      return encontrado;
    } else {
      throw new NotFoundException();
    }
  }


  /*@ApiTags('Shopping cart')
  @ApiResponse({
    status: 200,
    description: 'Carrito de compra eliminado',
  })
  @ApiResponse({
    status: 404,
    description: 'Carrito de compra no existe',
  })
  @Delete(':id/libro/isbn')
  async removelibro(
    @Param(
      'id',
      new ParseIntPipe({ errorHttpStatusCode: 400, optional: true }),
    )
    id: number,
      @Param('isbn') isbn: number
  ): Promise <ShoppingcartSalidaDto[]> {
    const encontrado = await this.shoppingcartService.removelibro(id, isbn);
    if (encontrado) {
      return encontrado;
    } else {
      throw new NotFoundException();
    }
  }*/
}
