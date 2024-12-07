import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from 'src/orm/entity/usuario';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { SeguridadModule } from 'src/seguridad/seguridad.module';
import { JwtModule } from '@nestjs/jwt';
import { TipoDireccion } from 'src/orm/entity/tipoDireccion';
import { Direccion } from 'src/orm/entity/direccion';
import { DireccionTipoDireccion } from 'src/orm/entity/direccion_tipoDireccion';

@Module({
  imports: [TypeOrmModule.forFeature([
    Usuario,
    TipoDireccion,
    Direccion,
    DireccionTipoDireccion
  ]),
  SeguridadModule,
  JwtModule.register({
    global: true,
    // secret: process.env.SECRET_KEY, // LLAVE SECRETA
    secret: '123456789', // LLAVE SECRETA
    signOptions: { expiresIn: '5h' }, // TIEMPO DE EXPIRACION
  })
],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService]
})
export class UsersModule {}
