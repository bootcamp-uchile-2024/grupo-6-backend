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
  UseGuards,
  UsePipes,
  ValidationPipe,
  Req,
  BadRequestException,
} from '@nestjs/common';
import { ShoppingcartService } from './shoppingcart.service';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateProductDto } from 'src/products/dto/create-product.dto';
import { ShoppingcartSalidaDto } from './dto/create-shoppingcart.salida.dto';
import { CreateShoppingcartDto } from './dto/create-shoppingcart.dto';
import { ShoppingcartUpdateDto } from './dto/shoppingcart.update.dto';
import { JwtGuard } from 'src/seguridad/guard/jwt.guard';
import { ValidarRolGuard } from 'src/seguridad/guard/validar-rol.guard';
import { Rol } from 'src/users/enum/rol.enum';
import { RolesAutorizados } from 'src/seguridad/decorator/rol.decorator';
import { SalidaShoppingcartDto } from './dto/salida-shoppingcart.dto';

@Controller('shoppingcart')
export class ShoppingcartController {


  constructor(
    private readonly shoppingcartService: ShoppingcartService,
  ) {}


  @ApiTags('Shopping cart')
  @Post('bulk')
  @UsePipes(ValidationPipe)
  @ApiOperation({ summary: 'Registra un carrito de compras activo.' })
  @ApiBody({
    type: CreateShoppingcartDto,
    description: 'Datos del carrito de compras',
  })
  @ApiResponse({
    status: 201,
    description: 'Carrito de compras guardados',
  })
  @ApiBearerAuth()
  @UseGuards(JwtGuard, ValidarRolGuard)
  @RolesAutorizados(Rol.USER)
  @Post()
  async create(
    @Req() request,
    @Body() createShoppingcartDto: CreateShoppingcartDto,
  ): Promise <SalidaShoppingcartDto> {
    const datosUsuario = request.datosUsuario;
    if(!datosUsuario){
      throw new BadRequestException();
    }
    return await this.shoppingcartService.create(datosUsuario, createShoppingcartDto);
  }
    

  @ApiTags('Shopping cart')
  @ApiResponse({ status: 200, description: 'Obtención de carrito de compras' })
  @ApiResponse({
    status: 404,
    description: 'No se puede obtener carrito de compras',
  })
  @ApiOperation({ summary: 'Registra un carrito de compras activo.' })
  @ApiBearerAuth()
  @UseGuards(JwtGuard, ValidarRolGuard)
  @RolesAutorizados(Rol.USER)
  @Get()
  async obtenerCarrito(@Req() request): Promise <SalidaShoppingcartDto> {
    const datosUsuario = request.datosUsuario;
    if(!datosUsuario){
      throw new BadRequestException();
    }
    return await this.shoppingcartService.obtenerCarrito(datosUsuario);
  }

  @ApiTags('Shopping cart')
  @ApiResponse({ status: 200, description: 'Eliminación de carrito de compras con éxito' })
  @ApiResponse({ status: 404, description: 'No se puede obtener carrito de compras' })
  @ApiOperation({ summary: 'Borrado lógico del carrito de compras' })
  @ApiBearerAuth()
  @UseGuards(JwtGuard, ValidarRolGuard)
  @RolesAutorizados(Rol.USER)
  @Get()
  async cancelarCarrito(@Req() request): Promise <string> {
    const datosUsuario = request.datosUsuario;
    if(!datosUsuario){
      throw new BadRequestException();
    }
    return await this.shoppingcartService.cancelarCarrito(datosUsuario);
  }
}
