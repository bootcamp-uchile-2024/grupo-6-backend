import { Controller, Get, Post, Body, Patch, Param, Delete, Res } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Response } from 'express';
import { ApiResponse } from '@nestjs/swagger';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  // @Post()
  // create(@Body() createProductDto: CreateProductDto) {
  //   return this.productsService.create(createProductDto);
  // }

  @Get()
  nombreEpica() {
    return this.productsService.nombreEpica();
  }

  @ApiResponse({ status: 200, description: 'Este codigo se debe a que se pudo enviar el libro en base al isbn ingresado.' })
  @ApiResponse({ status: 404, description: 'Este codigo se debe a que no encuentra el isbn del libro.' })
  @Get(':isbn')
  findOne(@Param('isbn') isbn: string,@Res() response: Response): void {
    const producto = this.productsService.findOne(isbn);
    if(producto){
      response.status(200).send(producto);
    }
    else{
      response.status(404).send('No existe cuenta vista con el id ingresado.');
    }
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
  //   return this.productsService.update(+id, updateProductDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.productsService.remove(+id);
  // }
}
