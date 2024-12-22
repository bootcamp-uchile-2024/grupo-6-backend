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
import { Purchase } from "./entity/purchase";


@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: process.env.DB_HOST,
            port: Number(process.env.DB_PORT),
            username: process.env.DB_USER, 
            password: process.env.DB_PASS,
            database: process.env.DB_NAME, 
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
                Purchase        
            ]
        }),
        OrmModule,
    ],
})

export class OrmModule {

}