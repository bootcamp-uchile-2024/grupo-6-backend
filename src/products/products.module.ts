import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Autor } from 'src/orm/entity/autor';
import { Genero } from 'src/orm/entity/genero';
import { Libro } from 'src/orm/entity/libro';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';

@Module({
  imports: [TypeOrmModule.forFeature([
    Libro,
    Autor, 
    Genero
  ])],
  controllers: [ProductsController],
  providers: [ProductsService],
  exports: [ProductsService],
})
export class ProductsModule {}
