import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Autor } from "./entity/autor";
import { Direccion } from "./entity/direccion";
import { Editorial } from "./entity/editorial";
import { Encuadernacion } from "./entity/encuadernacion";
import { Genero } from "./entity/genero";
import { HistorialCompra } from "./entity/historial_compra";
import { IdiomaLibro } from "./entity/idioma_libro";
import { Libro } from "./entity/libro";
import { LibroCompra } from "./entity/libro_compra";
import { Carrito } from "./entity/carrito";
import { Resena } from "./entity/resena";
import { TipoDireccion } from "./entity/tipoDireccion";
import { Usuario } from "./entity/usuario";



@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            port: 3307,
            username: 'root',
            password: 'grupo-6',
            database: 'Paginas_Selectas',
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
                Carrito                
            ]
        }),
        OrmModule,
    ],
})

export class OrmModule {

}