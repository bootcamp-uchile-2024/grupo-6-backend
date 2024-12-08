import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";
import { Editorial } from "./editorial";
import { IdiomaLibro } from "./idioma_libro";
import { Encuadernacion } from "./encuadernacion";
import { Resena } from "./resena";
import { LibroCompra } from "./libro_compra";
import { Genero } from "./genero";
import { Autor } from "./autor";
import { Carrito } from "./carrito";

@Entity({name: "libro"})
export class Libro {
    @PrimaryColumn()
    id: number;
    
    @Column()
    isbn: string;

    @Column()
    id_idioma: number;

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

    @ManyToMany(() => Genero, (genero) => genero.libros, { 
        onDelete: "CASCADE",
        cascade: true
    })
    generos: Genero[];

    @ManyToMany(() => Autor, (autor) => autor.libros,{ 
        onDelete: "CASCADE",
        cascade: true
    })
    autores: Autor[];

    @OneToMany(() => Resena, (resena) => resena.libro, { cascade: true })
    resena: Resena[];

    @OneToMany(() => LibroCompra, (libroCompra) => libroCompra.libro, { cascade: true })
    libroCompra: LibroCompra[];

    @ManyToOne(() => Carrito, (carrito) => carrito.libros, { cascade: true })
    @JoinColumn({ name: "id" })
    carrito: Carrito;
}