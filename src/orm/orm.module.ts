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
            host: process.env.RUTA_DB ?? 'localhost',
            port: Number(process.env.PUERTO_DB) ?? 3306,
            username: process.env.USUARIO_DB ?? 'root', 
            password: process.env.CLAVE_ROOT_DB ?? 'grupo-6',
            database: process.env.NOMBRE_DB ?? 'paginas_selectas', 
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