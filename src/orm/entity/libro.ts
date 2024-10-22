import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";
import { Editorial } from "./editorial";
import { IdiomaLibro } from "./idioma_libro";
import { Encuadernacion } from "./encuadernacion";
import { GeneroLibro } from "./genero_libro";
import { AutorLibro } from "./autor_libro";
import { Resena } from "./resena";
import { LibroCompra } from "./libro_compra";

@Entity({name: "libro"})
export class Libro {
    @PrimaryColumn()
    id: number;
    
    @Column()
    isbn: string;

    @Column()
    id_idioma:number;

    @Column()
    id_encuadernacion: number;

    @Column()
    nombre: string;

    @Column()
    stock_libro: number;

    @Column()
    precio: number;

    @Column()
    rating: number;

    @Column()
    id_editorial:number;

    @Column()
    agno_publicacion: number;

    @Column()
    numero_paginas: number;

    @Column()
    descuento: number;

    @Column()
    caratula: string;

    @Column()
    dimensiones: string;

    @Column()
    codigo_barra: string;

    @Column()
    resumen: string;

    @ManyToOne(() => Editorial)
    @JoinColumn({ name: "id_editorial" })
    editorial: Editorial;

    @ManyToOne(() => IdiomaLibro)
    @JoinColumn({ name: "id_idioma" })
    idiomaLibro: IdiomaLibro;

    @ManyToOne(() => Encuadernacion)
    @JoinColumn({ name: "id_encuadernacion" })
    encuadernacion: Encuadernacion;

    @OneToMany(() => GeneroLibro, (generoLibro) => generoLibro.libro)
    generoLibro: GeneroLibro[];

    @OneToMany(() => AutorLibro, (autorLibro) => autorLibro.libro)
    autorLibro: AutorLibro[];

    @OneToMany(() => Resena, (resena) => resena.libro)
    resena: Resena[];

    @OneToMany(() => LibroCompra, (libroCompra) => libroCompra.libro)
    libroCompra: LibroCompra[];
}