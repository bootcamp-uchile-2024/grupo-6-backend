import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from 'src/orm/entity/usuario';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  imports: [TypeOrmModule.forFeature([
    Usuario
  ])],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
