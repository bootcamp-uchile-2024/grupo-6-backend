import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { Libro } from "./libro";

@Entity({name: "encuadernacion"})
export class Encuadernacion {
    @PrimaryColumn()
    id: number;
    
    @Column()
    descripcion: string;

    @OneToMany(() => Libro, (libro) => libro.encuadernacion)
    libro: Libro[];
}