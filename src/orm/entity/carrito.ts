import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Libro } from "./libro";
import { Usuario } from "./usuario";
import { CarritoInformacion } from "./carrito_informacion";



@Entity({name: "carrito"})
export class Carrito {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(() => CarritoInformacion, (carritoInformacion) => carritoInformacion.carrito)
    @JoinColumn({ name: 'carrito_id' }) // Nombre de la clave foránea en la base de datos
    carritoInformacion: CarritoInformacion;

    @Column({name: 'carrito_id'})
    carrito_id: number;
    
    @Column()
    isbn_libro: string;

    @Column()
    cantidad: number;

    @Column()
    precio: number;

    @Column()
    descuento: number;
}