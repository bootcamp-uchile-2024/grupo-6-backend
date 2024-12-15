import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryColumn } from "typeorm";
import { Libro } from "./libro";
import { GeneroEnum } from "src/products/entities/generoEnum";

@Entity({name: "genero"})
export class Genero {
    @PrimaryColumn()
    id: number;
    
    @Column()
    descripcion: GeneroEnum;

    @ManyToMany(() => Libro, (libro) => libro.generos)
    @JoinTable({ 
        name: 'genero_libro',
        joinColumn: {
            name: 'id_genero',
            referencedColumnName: 'id',
        },
        inverseJoinColumn: {
            name: 'isbn_libro',
            referencedColumnName: 'isbn',
        },
    })
    libros: Libro[];
}