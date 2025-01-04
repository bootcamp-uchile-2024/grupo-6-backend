import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Autor } from "./entity/autor";
import { Carrito } from "./entity/carrito";
import { Direccion } from "./entity/direccion";
import { Editorial } from "./entity/editorial";
import { Encuadernacion } from "./entity/encuadernacion";
import { Genero } from "./entity/genero";
import { HistorialCompra } from "./entity/historial_compra";
import { IdiomaLibro } from "./entity/idioma_libro";
import { Libro } from "./entity/libro";
import { LibroCompra } from "./entity/libro_compra";
import { Resena } from "./entity/resena";
import { TipoDireccion } from "./entity/tipoDireccion";
import { Usuario } from "./entity/usuario";
import { GeneroLibro } from "./entity/genero_libro";
import { DireccionTipoDireccion } from "./entity/direccion_tipoDireccion";
import { CarritoInformacion } from "./entity/carrito_informacion";

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: process.env.RUTA_DB,
            port: Number(process.env.PUERTO_DB),
            username: process.env.USUARIO_DB, 
            password: process.env.CLAVE_ROOT_DB,
            database: process.env.NOMBRE_DB, 
            entities: [
                Usuario,
                Direccion,
                TipoDireccion,
                Genero,
                Autor,
                IdiomaLibro,
                Encuadernacion,
                Editorial,
                Libro,
                Resena,
                HistorialCompra,
                LibroCompra,
                Carrito,
                GeneroLibro,  
                DireccionTipoDireccion,
                CarritoInformacion,        
            ]
        }),
        OrmModule,
    ],
})

export class OrmModule {

}