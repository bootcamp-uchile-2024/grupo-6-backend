import { Libro } from "./libro";
import { GeneroEnum } from "src/products/entities/generoEnum";
export declare class Genero {
    id: number;
    descripcion: GeneroEnum;
    libros: Libro[];
}
