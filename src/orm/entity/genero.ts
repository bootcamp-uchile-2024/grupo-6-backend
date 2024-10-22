import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryColumn } from "typeorm";
import { Libro } from "./libro";

@Entity({name: "genero"})
export class Genero {
    @PrimaryColumn()
    id: number;
    
    @Column()
    descripcion: string;

    @ManyToMany(() => Libro)
    @JoinTable({ name: 'genero_libro',
        joinColumn: {
            name: 'id_genero',
            referencedColumnName: 'id',
        },
        inverseJoinColumn: {
            name: 'id_libro',
            referencedColumnName: 'id',
        },
    })
    libros: Libro[];
}