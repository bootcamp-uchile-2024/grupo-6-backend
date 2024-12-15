import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Autor } from 'src/orm/entity/autor';
import { Genero } from 'src/orm/entity/genero';
import { Libro } from 'src/orm/entity/libro';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { IdiomaLibro } from 'src/orm/entity/idioma_libro';
import { Encuadernacion } from 'src/orm/entity/encuadernacion';
import { Editorial } from 'src/orm/entity/editorial';
import { GeneroLibro } from 'src/orm/entity/genero_libro';

@Module({
  imports: [TypeOrmModule.forFeature([
    Libro,
    Autor, 
    Genero,
    IdiomaLibro,
    Encuadernacion,
    Editorial,
    GeneroLibro,
  ])],
  controllers: [ProductsController],
  providers: [ProductsService],
  exports: [ProductsService],
})
export class ProductsModule {}
