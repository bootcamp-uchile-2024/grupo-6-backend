import { Body, Controller, Delete, Get, HttpException, HttpStatus, NotFoundException, Param, Patch, Post, Request, UseGuards, UseInterceptors, UsePipes } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { HistorialCompra } from 'src/orm/entity/historial_compra';
import { RolesAutorizados } from 'src/seguridad/decorator/rol.decorator';
import { JwtGuard } from 'src/seguridad/guard/jwt.guard';
import { ValidarRolGuard } from 'src/seguridad/guard/validar-rol.guard';
import { Rol } from 'src/users/enum/rol.enum';
import { CreatePurchaseDto } from './dto/create-purchase.dto';
import { GetPurchaseDto } from './dto/get-purchase.dto';
import { UpdatePurchaseDto } from './dto/update-purchase.dto';
import { ValidationCreatePurchasePipe } from './pipes/validation-create-purchase.pipe';
import { ValidationFindPurchasePipe } from './pipes/validation-find-purchase.pipe';
import { ValidationUpdatePurchasePipe } from './pipes/validation-update-purchase.pipe';
import { PurchasesService } from './purchases.service';
import { ExistUserShoppingCardInterceptor } from './interceptors/existUserShoppingCard.interceptor';
import { ExistUserAdressInterceptor } from './interceptors/existUserAdress.interceptor';

@Controller('purchases')
export class PurchasesController {
  constructor(private readonly purchasesService: PurchasesService) {}

  // HU Proceso de compra (genera un pedido) ---------------------------------------------------------
  @ApiTags('Purchases')
  @ApiOperation({ summary:'Generar un pedido'})
  @ApiBearerAuth()
  @UsePipes(ValidationCreatePurchasePipe)
  @UseInterceptors(ExistUserShoppingCardInterceptor, ExistUserAdressInterceptor)
  @UseGuards(JwtGuard, ValidarRolGuard)
  @RolesAutorizados(Rol.USER, Rol.ADMIN)
  @ApiResponse({ status: 201, description: 'Se crea el pedido correctamente' })
  @ApiResponse({ status: 400, description: 'Error al crear el pedido' })
  @ApiBody({type: CreatePurchaseDto, required: true })
  @Post()
  async create(
    @Body() createPurchaseDto: CreatePurchaseDto,
    @Request() request,
  ): Promise<GetPurchaseDto> {
    try {
      return await this.purchasesService.create(createPurchaseDto, request);
    } catch (error) {
      throw new HttpException('Error al crear el pedido', 400);
    }
  }

  // HU Estado de compra (historial de pedidos del cliente) ---------------------------------------
  @ApiTags('Purchases')
  @ApiOperation({ summary:'Obtener pedidos de un usuario'})
  @ApiBearerAuth()
  @UseGuards(JwtGuard, ValidarRolGuard)
  @RolesAutorizados(Rol.USER, Rol.ADMIN)
  @ApiResponse({ status: 200, description: 'Se obtuvieron los pedidos del usuario correctamente' })
  @ApiResponse({ status: 404, description: 'El usuario no tiene ningún pedido' })
  @Get()
  async findAll(
    @Request() request,
  ): Promise<GetPurchaseDto[]> {
    try {
      const pedidos = await this.purchasesService.findAllClient(request.datosUsuario);

      if (pedidos.length == 0){
        throw new NotFoundException('El usuario no tiene ningún pedido');
      }
      return pedidos;
    } catch (error) {
      throw new HttpException(error.message, error.status || HttpStatus.BAD_REQUEST);
    }
  }

  // Obtener un pedido específico --------------------------------------------------------
  @ApiTags('Purchases')
  @ApiOperation({ summary:'Obtener 1 pedido de un usuario'})
  @ApiBearerAuth()
  @UsePipes(ValidationFindPurchasePipe)
  @UseGuards(JwtGuard, ValidarRolGuard)
  @RolesAutorizados(Rol.USER, Rol.ADMIN)
  @ApiResponse({ status: 200, description: 'Se obtuvo el pedido correctamente' })
  @ApiResponse({ status: 404, description: 'No existe el pedido de ID XX para el usuario' })
  @ApiParam({name: 'id', required: true, type: 'number', description: 'ID del pedido'})
  @Get(':id')
  async findOne(
    @Request() request,
    @Param('id') id: string,
  ) {
    try {
      const pedido = await this.purchasesService.findOne(+id, request.datosUsuario);

      if (!pedido){
        throw new NotFoundException(`No existe el pedido de ID ${id} para el usuario`);
      }
      return pedido;
    } catch (error) {
      throw new HttpException(error.message, error.status || HttpStatus.BAD_REQUEST);
    }
  }

  // Actualizar estado de pedido ---------------------------------------------------------------
  @ApiTags('Purchases')
  @ApiOperation({ summary:'Actualizar datos de un pedido'})
  @ApiBearerAuth()
  @UseGuards(JwtGuard, ValidarRolGuard)
  @RolesAutorizados(Rol.ADMIN)
  @UsePipes(ValidationUpdatePurchasePipe)
  @ApiResponse({ status: 200, description: 'Se actualizó el estado del pedido correctamente' })
  @ApiResponse({ status: 400, description: 'Error al actualizar estado del pedido' })
  @ApiParam({name: 'id', required: true, type: 'number', description: 'ID del pedido'})
  @Patch(':id')
  async update(
    @Param('id') id: HistorialCompra, 
    @Body() updatePurchaseDto: UpdatePurchaseDto,
  ): Promise<GetPurchaseDto> {
    try {
      return await this.purchasesService.update(id, updatePurchaseDto);
    } catch (error) {
      throw new HttpException(error.message, error.status || HttpStatus.BAD_REQUEST);
    }
  }

  // Eliminar pedido si aún no está entregado -----------------------------------------------
  @ApiTags('Purchases')
  @ApiOperation({ summary:'Eliminar un pedido'})
  @ApiBearerAuth()
  @UseGuards(JwtGuard, ValidarRolGuard)
  @RolesAutorizados(Rol.ADMIN)
  @UsePipes(ValidationFindPurchasePipe)
  @ApiResponse({ status: 200, description: 'Se eliminó el pedido correctamente' })
  @ApiResponse({ status: 400, description: 'Error al eliminar el pedido' })
  @Delete(':id')
  async remove(@Param('id') id: string): Promise<string> {
    return await this.purchasesService.remove(+id);
    try {
    } catch (error) {
      throw new HttpException('Error al eliminar el libro', 400);
    }
  }
}
