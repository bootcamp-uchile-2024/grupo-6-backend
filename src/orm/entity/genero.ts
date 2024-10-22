import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { GeneroLibro } from "./genero_libro";

@Entity({name: "genero"})
export class Genero {
    @PrimaryColumn()
    id: number;
    
    @Column()
    descripcion: string;

    @OneToMany(() => GeneroLibro, (generoLibro) => generoLibro.genero)
    generoLibro: GeneroLibro[];
}