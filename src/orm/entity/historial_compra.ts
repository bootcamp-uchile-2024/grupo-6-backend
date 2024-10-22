import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";
import { Usuario } from "./usuario";
import { Direccion } from "./direccion";
import { LibroCompra } from "./libro_compra";

@Entity({name: "historial_compra"})
export class HistorialCompra {
    @PrimaryColumn()
    id: number;
    
    @Column()
    id_usuario: number;

    @Column()
    estatus_compra: string;

    @Column()
    fecha_compra: Date;

    @Column()
    fecha_entrega: Date;

    @Column()
    id_direccion_entrega: number;

    @ManyToOne(() => Usuario)
    @JoinColumn({ name: "id_usuario" })
    usuario: Usuario;

    @ManyToOne(() => Direccion)
    @JoinColumn({ name: "id_direccion_entrega" })
    direccion: Direccion;

    @OneToMany(() => LibroCompra, (libroCompra) => libroCompra.historialCompra)
    libroCompra: LibroCompra[];
}