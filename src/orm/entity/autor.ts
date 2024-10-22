import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { AutorLibro } from "./autor_libro";

@Entity({name: "autor"})
export class Autor {
    @PrimaryColumn()
    id: number;
    
    @Column()
    nombre: string;

    @OneToMany(() => AutorLibro, (autorLibro) => autorLibro.autor)
    autorLibro: AutorLibro[];
}