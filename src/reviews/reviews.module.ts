import { Module } from '@nestjs/common';
import { ReviewsService } from './reviews.service';
import { ReviewsController } from './reviews.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Resena } from 'src/orm/entity/resena';
import { Usuario } from 'src/orm/entity/usuario';
import { Libro } from 'src/orm/entity/libro';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [TypeOrmModule.forFeature([
    Resena,
    Usuario,
    Libro
  ]),
  UsersModule],
  controllers: [ReviewsController],
  providers: [ReviewsService],
})
export class ReviewsModule {}
