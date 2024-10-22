import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { Libro } from "./libro";

@Entity({name: "idioma_libro"})
export class IdiomaLibro {
    @PrimaryColumn()
    id: number;
    
    @Column()
    descripcion: string;

    @OneToMany(() => Libro, (libro) => libro.idiomaLibro)
    libro: Libro[];
}