import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryColumn } from "typeorm";
import { Libro } from "./libro";

@Entity({name: "autor"})
export class Autor {
    @PrimaryColumn()
    id: number;
    
    @Column()
    nombre: string;

    @ManyToMany(() => Libro, (libro) => libro.autores)
    @JoinTable({ 
        name: 'autor_libro',
        joinColumn: {
            name: 'id_autor',
            referencedColumnName: 'id',
        },
        inverseJoinColumn: {
            name: 'id_libro',
            referencedColumnName: 'id',
        },
    })
    libros: Libro[];
}