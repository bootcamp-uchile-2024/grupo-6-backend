import { BadRequestException, Body, Controller, Delete, Get, HttpException, Param, Patch, Post, Request, UseGuards, UsePipes } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreatePurchaseDto } from './dto/create-purchase.dto';
import { GetPurchaseDto } from './dto/get-purchase.dto';
import { UpdatePurchaseDto } from './dto/update-purchase.dto';
import { ValidationCreatePurchasePipe } from './pipes/validation-create-purchase.pipe';
import { ValidationUpdatePurchasePipe } from './pipes/validation-update-purchase.pipe';
import { PurchasesService } from './purchases.service';
import { ValidationDeletePurchasePipe } from './pipes/validation-delete-purchase.pipe';
import { HistorialCompra } from 'src/orm/entity/historial_compra';
import { ValidationFindPurchasePipe } from './pipes/validation-find-purchase.pipe';
import { JwtGuard } from 'src/seguridad/guard/jwt.guard';
import { ValidarRolGuard } from 'src/seguridad/guard/validar-rol.guard';
import { RolesAutorizados } from 'src/seguridad/decorator/rol.decorator';
import { Rol } from 'src/users/enum/rol.enum';

@Controller('purchases')
export class PurchasesController {
  constructor(private readonly purchasesService: PurchasesService) {}

  // HU Proceso de compra (genera un pedido) ---------------------------------------------------------
  @ApiTags('Purchases')
  @ApiOperation({ summary:'Generar un pedido'})
  @ApiBearerAuth()
  @UsePipes(ValidationCreatePurchasePipe)
  @UseGuards(JwtGuard, ValidarRolGuard)
  @RolesAutorizados(Rol.USER, Rol.ADMIN)
  @ApiResponse({ status: 201, description: 'Se crea el pedido correctamente' })
  @ApiResponse({ status: 400, description: 'Error al crear el pedido' })
  @ApiBody({type: CreatePurchaseDto, required: true })
  @Post()
  async create(
    @Body() createPurchaseDto: CreatePurchaseDto,
    @Request() request,
  ){//: Promise<GetPurchaseDto> {
    return await this.purchasesService.create(createPurchaseDto, request.datosUsuario);
    try {
    } catch (error) {
      throw new HttpException('Error al crear el pedido', 400);
    }
  }

  // HU Estado de compra (historial de pedidos del cliente)
  @ApiTags('Purchases')
  @ApiResponse({ status: 200, description: 'Se obtuvieron los pedidos del usuario correctamente' })
  @ApiResponse({ status: 400, description: 'Error al obtener los pedidos' })
  @ApiParam({name: 'id', required: true, type: 'number', description: 'ID del cliente'})
  @Get('/cliente/:id')
  async findAll(
    @Param('id') id_usuario: number
  ): Promise<GetPurchaseDto[]> {
    try {
      return await this.purchasesService.findAllClient(+id_usuario);
    } catch (error) {
      throw new HttpException('Error al obtener los pedidos', 400);
    }
  }

  // Obtener un pedido específico
  @ApiTags('Purchases')
  @UsePipes(ValidationFindPurchasePipe)
  @ApiResponse({ status: 200, description: 'Se obtuvo el pedido correctamente' })
  @ApiResponse({ status: 400, description: 'Error al obtener el pedido' })
  @ApiParam({name: 'id', required: true, type: 'number', description: 'ID del pedido'})
  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      return await this.purchasesService.findOne(+id);
    } catch (error) {
      throw new HttpException('Error el obtener el pedido', 400);
    }
  }

  // Actualizar estado de pedido
  @ApiTags('Purchases')
  @UsePipes(ValidationUpdatePurchasePipe)
  @ApiResponse({ status: 200, description: 'Se actualizó el estado del pedido correctamente' })
  @ApiResponse({ status: 400, description: 'Error al actualizar estado del pedido' })
  @ApiParam({name: 'id', required: true, type: 'number', description: 'ID del pedido'})
  @Patch(':id')
  async update(
    @Param('id') id: HistorialCompra, 
    @Body() updatePurchaseDto: UpdatePurchaseDto
  ): Promise<GetPurchaseDto> {
    try {
      return await this.purchasesService.update(id, updatePurchaseDto);
    } catch (error) {
      if (error instanceof BadRequestException){
        throw error
      } else {
        throw new HttpException('Error el obtener el pedido', 400);
      }
    }
  }

  // Eliminar pedido si aún no está entregado
  @ApiTags('Purchases')
  @UsePipes(ValidationDeletePurchasePipe)
  @ApiResponse({ status: 200, description: 'Se eliminó el pedido correctamente' })
  @ApiResponse({ status: 400, description: 'Error al eliminar el pedido' })
  @Delete(':id')
  async remove(@Param('id') id: string): Promise<string> {
    try {
      return await this.purchasesService.remove(+id);
    } catch (error) {
      throw new HttpException('Error al eliminar el libro', 400);
    }
  }
}
