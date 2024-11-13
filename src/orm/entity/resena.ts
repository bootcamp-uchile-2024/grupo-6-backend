import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { Libro } from "./libro";
import { Usuario } from "./usuario";

@Entity({name: "resena"})
export class Resena {
    @PrimaryColumn()
    id: number;
    
    @Column()
    id_usuario: number;

    @Column()
    id_libro: number;

    @Column()
    comentario: string;

    @Column()
    rating: number;

    @Column()
    fecha: Date;

    @ManyToOne(() => Libro, (libro) => libro.resena, { onDelete: "CASCADE" })
    @JoinColumn({ name: "id_libro" })
    libro: Libro;

    @ManyToOne(() => Usuario)
    @JoinColumn({ name: "id_usuario" })
    usuario: Usuario;
}