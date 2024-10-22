import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { Libro } from "./libro";
import { Autor } from "./autor";

@Entity({name: "autor_libro"})
export class AutorLibro {
    @PrimaryColumn()
    id_autor: number;
    
    @PrimaryColumn()
    id_libro: number;

    @ManyToOne(() => Autor)
    @JoinColumn({ name: "id_autor" })
    autor: Autor;

    @ManyToOne(() => Libro)
    @JoinColumn({ name: "id_libro" })
    libro: Libro;
}