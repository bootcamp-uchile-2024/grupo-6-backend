import { Editorial } from "./editorial";
import { IdiomaLibro } from "./idioma_libro";
import { Encuadernacion } from "./encuadernacion";
import { Resena } from "./resena";
import { LibroCompra } from "./libro_compra";
import { Genero } from "./genero";
import { Autor } from "./autor";
export declare class Libro {
    id: number;
    isbn: string;
    id_idioma: number;
    id_encuadernacion: number;
    nombre: string;
    stock_libro: number;
    precio: number;
    rating: number;
    id_editorial: number;
    agno_publicacion: Date;
    numero_paginas: number;
    descuento: number;
    caratula: string;
    dimensiones: string;
    codigo_barra: string;
    resumen: string;
    editorial: Editorial;
    idiomaLibro: IdiomaLibro;
    encuadernacion: Encuadernacion;
    generos: Genero[];
    autores: Autor[];
    resena: Resena[];
    libroCompra: LibroCompra[];
}