import { Controller, Get, Post, Body, Patch, Param, Delete, Res } from '@nestjs/common';
import { ShoppingcartService } from './shoppingcart.service';
import { CreateShoppingcartDto } from './dto/create-shoppingcart.dto';
import { UpdateShoppingcartDto } from './dto/update-shoppingcart.dto';
import { Response } from 'express';

@Controller('shoppingcart')
export class ShoppingcartController {
  constructor(private readonly shoppingcartService: ShoppingcartService) {}

  /*@Post()
  create(@Body() createShoppingcartDto: CreateShoppingcartDto) {
    return this.shoppingcartService.create(createShoppingcartDto);
  }*/

  @Get()
  obtenerNombreEpica(@Res() res:Response): void {
    let encontrado = this.shoppingcartService.obtenerNombreEpica();
    if(encontrado != null){
      res.status(200).send(encontrado);
    }else{
      res.status(404).send("No se encuentra información requerida");
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

  /*@Delete(':id')
  remove(@Param('id') id: string) {
    return this.shoppingcartService.remove(+id);
  }*/
}

