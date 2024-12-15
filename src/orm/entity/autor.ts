import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { Libro } from "./libro";

@Entity({name: "autor"})
export class Autor {
    @PrimaryColumn()
    id: number;
    
    @Column()
    nombre: string;

    @OneToMany(() => Libro, (libro) => libro.autor, { onDelete: "CASCADE" })
    libros: Libro[];
}