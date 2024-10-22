import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { Genero } from "./genero";
import { Libro } from "./libro";

@Entity({name: "genero_libro"})
export class GeneroLibro {
    @PrimaryColumn()
    id_genero: number;
    
    @PrimaryColumn()
    id_libro: number;

    @ManyToOne(() => Genero)
    @JoinColumn({ name: "id_genero" })
    genero: Genero;

    @ManyToOne(() => Libro)
    @JoinColumn({ name: "id_libro" })
    libro: Libro;
}