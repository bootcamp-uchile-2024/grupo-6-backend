import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Usuario } from "./entity/usuario";
import { Region } from "./entity/region";
import { Ciudad } from "./entity/ciudad";
import { Comuna } from "./entity/comuna";
import { Direccion } from "./entity/direccion";
import { TipoDireccion } from "./entity/tipoDireccion";
import { DireccionTipoDireccion } from "./entity/direccion_tipoDireccion";
import { Genero } from "./entity/genero";
import { Autor } from "./entity/autor";
import { IdiomaLibro } from "./entity/idioma_libro";
import { Encuadernacion } from "./entity/encuadernacion";
import { Editorial } from "./entity/editorial";
import { Libro } from "./entity/libro";
import { GeneroLibro } from "./entity/genero_libro";
import { AutorLibro } from "./entity/autor_libro";
import { Resena } from "./entity/resena";
import { HistorialCompra } from "./entity/historial_compra";
import { LibroCompra } from "./entity/libro_compra";



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
                DireccionTipoDireccion,
                Genero,
                Autor,
                IdiomaLibro,
                Encuadernacion,
                Editorial,
                Libro,
                GeneroLibro,
                AutorLibro,
                Resena,
                HistorialCompra,
                LibroCompra                
            ]
        }),
        OrmModule,
    ],
})

export class OrmModule {

}