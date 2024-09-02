import { Controller, Get, Post, Body, Patch, Param, Delete, Res } from '@nestjs/common';
import { ShoppingcartService } from './shoppingcart.service';
import { CreateShoppingcartDto } from './dto/create-shoppingcart.dto';
import { UpdateShoppingcartDto } from './dto/update-shoppingcart.dto';
import { Response } from 'express';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('shoppingcart')
export class ShoppingcartController {
  constructor(private readonly shoppingcartService: ShoppingcartService) {}

  @ApiTags('Shopping cart')
  @ApiBody({type: CreateShoppingcartDto, description: 'Datos del libro que se va a cargar al carrito de compras'})
  @ApiResponse({status:201, description: 'Producto agregado a carrito de compras'})
  @Post()
  create(@Body() createShoppingcartDto: CreateShoppingcartDto, /*@Res() response:Response*/ ) {
    return this.shoppingcartService.create(createShoppingcartDto); //response.status(201).send(this.shoppingcartService.create(createShoppingcartDto));    
  }
  /*@ApiTags('Obtención de nombre de la Épica')
  @Get()
  obtenerNombreEpica(@Res() res:Response): void {
    let encontrado = this.shoppingcartService.obtenerNombreEpica();
    if(encontrado != null){
      res.status(200).send(encontrado);
    }else{
      res.status(404).send("No se encuentra información requerida");
    }
    
  }*/

  @ApiTags('Shopping cart')
  @ApiResponse({status:200, description: 'Obtención de carrito de compras'})
  @ApiResponse({status:404, description: 'No se puede obtener carrito de compras'})
  @Get()
  obtenerProductos(/*@Res() res:Response*/) {
    let encontrado = this.shoppingcartService.obtenerProductos();
    if(encontrado != null){
      return encontrado; //res.status(200).send(encontrado);
    }else{
      //return 'No se encuentra información requerida' //res.status(404).send("No se encuentra información requerida");
    }
    
  }

  /*@Get(':id')
  findOne(@Param('id') id: string) {
    return this.shoppingcartService.findOne(+id);
  }*/

  /*@Patch(':id')
  update(@Param('id') id: string, @Body() updateShoppingcartDto: UpdateShoppingcartDto) {
    return this.shoppingcartService.update(+id, updateShoppingcartDto);
  }*/
    @ApiTags('Shopping cart')
    @ApiResponse({status:200, description: 'Producto eliminado del carrito de compra'})
    @ApiResponse({status:404, description: 'Producto no existe en el carrito de compra'})
    @Delete(':item')
    remove(@Param('item') item: number, /*@Res() response:Response*/) {
      const encontrado = this.shoppingcartService.remove(item);
      if (encontrado){
        return 'Producto eliminado del carrito de compra'//response.status(200).send('Producto eliminado del carrito de compra');
      }else{
        //return 'Producto no existe'//response.status(404).send('Producto no existe en el carrito de compra');
      }
    }
}

