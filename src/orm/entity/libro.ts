import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";
import { Autor } from "./autor";
import { Carrito } from "./carrito";
import { Editorial } from "./editorial";
import { Encuadernacion } from "./encuadernacion";
import { Genero } from "./genero";
import { IdiomaLibro } from "./idioma_libro";
import { LibroCompra } from "./libro_compra";
import { Resena } from "./resena";

@Entity({name: "libro"})
export class Libro {
    @PrimaryColumn()
    isbn: string;

    @Column()
    nombre: string;

    @Column()
    id_autor: number;

    @Column()
    stock_libro: number;
    
    @Column()
    precio: number;

    @Column()
    rating: number;

    @Column()
    id_editorial: number;

    @Column()
    id_idioma: number;

    @Column()
    id_encuadernacion: number;

    @Column()
    agno_publicacion: number;

    @Column()
    numero_paginas: number;

    @Column()
    descuento: number;

    @Column()
    dimensiones: string;

    @Column()
    codigo_barra: string;

    @Column()
    caratula: string;

    @Column()
    resumen: string;

    @Column()
    fecha_creacion: string;

    @Column()
    destacado: boolean;

    @Column()
    habilitado: boolean;

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

    @ManyToOne(() => Autor, (autor) => autor.libros, { 
        onDelete: "CASCADE",
        cascade: true,
    })
    @JoinColumn({ name: 'id_autor'})
    autor: Autor;

    @OneToMany(() => Resena, (resena) => resena.libro, { cascade: true })
    resena: Resena[];

    @OneToMany(() => LibroCompra, (libroCompra) => libroCompra.libro, { cascade: true })
    libroCompra: LibroCompra[];

    @OneToMany(() => Carrito, (carrito) => carrito.libro)
    carritos: Carrito[];
}