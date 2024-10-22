import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { Libro } from "./libro";

@Entity({name: "editorial"})
export class Editorial {
    @PrimaryColumn()
    id: number;
    
    @Column()
    descripcion: string;
    
    @OneToMany(() => Libro, (libro) => libro.editorial)
    libro: Libro[];
}