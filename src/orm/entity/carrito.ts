import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";
import { Libro } from "./libro";
import { Usuario } from "./usuario";



@Entity({name: "carrito"})
export class Carrito {
    @PrimaryColumn()
    usuario_id: number;
    
    @PrimaryColumn()
    isbn_libro: string;

    @Column()
    cantidad: number;

    @Column()
    precio: number;

    @Column()
    descuento: number;

    @ManyToOne(() => Usuario, (usuario)=>usuario.carritos)
    @JoinColumn({ name: "usuario_id" })
    usuario: Usuario;

    @ManyToOne(() => Libro, (libro) => libro.carritos, { onDelete: "CASCADE" })
    @JoinColumn({name: 'isbn_libro'})
    libro: Libro;
}