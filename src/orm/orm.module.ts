import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Usuario } from "./entity/usuario";
import { Region } from "./entity/region";
import { Ciudad } from "./entity/ciudad";
import { Comuna } from "./entity/comuna";
import { Direccion } from "./entity/direccion";
import { TipoDireccion } from "./entity/tipoDireccion";
import { Genero } from "./entity/genero";
import { Autor } from "./entity/autor";
import { IdiomaLibro } from "./entity/idioma_libro";
import { Encuadernacion } from "./entity/encuadernacion";
import { Editorial } from "./entity/editorial";
import { Libro } from "./entity/libro";
import { Resena } from "./entity/resena";
import { HistorialCompra } from "./entity/historial_compra";
import { LibroCompra } from "./entity/libro_compra";
import { Carrito } from "./entity/carrito";



@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'mysql',
            port: 3306,
            username: 'root',
            password: 'grupo-6',
            database: 'paginas_selectas',
            entities: [
                Usuario,
                Region,
                Ciudad,
                Comuna,
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