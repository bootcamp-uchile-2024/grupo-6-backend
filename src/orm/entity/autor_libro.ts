import { Entity, PrimaryColumn } from "typeorm";

@Entity({name: "autor_libro"})
export class AutorLibro {
    @PrimaryColumn()
    id_autor: number;
    
    @PrimaryColumn()
    id_libro: number;
}