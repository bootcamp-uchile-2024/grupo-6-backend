import { Entity, PrimaryColumn } from "typeorm";

@Entity({name: "genero_libro"})
export class GeneroLibro {
    @PrimaryColumn()
    id_genero: number;
    
    @PrimaryColumn()
    id_libro: number;
}