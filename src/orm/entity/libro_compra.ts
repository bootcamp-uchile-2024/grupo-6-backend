import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { HistorialCompra } from "./historial_compra";
import { Libro } from "./libro";

@Entity({name: "libro_compra"})
export class LibroCompra {
    @PrimaryColumn()
    id_compra: number;
    
    @PrimaryColumn()
    isbn_libro: string;

    @Column()
    cantidad: number;

    @Column()
    precio: number;

    @ManyToOne(() => HistorialCompra)
    @JoinColumn({ name: "id_compra" })
    historialCompra: HistorialCompra;

    @ManyToOne(() => Libro, (libro) => libro.libroCompra, { onDelete: "CASCADE" })
    @JoinColumn({ name: "isbn_libro" })
    libro: Libro;
}