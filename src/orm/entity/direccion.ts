import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";
import { Comuna } from "./comuna";
import { Usuario } from "./usuario";
import { HistorialCompra } from "./historial_compra";
import { TipoDireccion } from "./tipoDireccion";

@Entity({name: "direccion"})
export class Direccion {
    @PrimaryColumn()
    id: number;
    
    @Column()
    id_usuario: number;

    @Column()
    id_tipo_direccion: number;

    @Column()
    calle: string;

    @Column()
    numero_calle: string;

    @Column()
    numero_departamento: string;

    @Column()
    id_comuna: number;

    @Column()
    informacion_adicional: string;

    @ManyToOne(() => Comuna)
    @JoinColumn({ name: "id_comuna" })
    comuna: Comuna;

    @ManyToOne(() => Usuario)
    @JoinColumn({ name: "id_usuario" })
    usuario: Usuario;

    @ManyToMany(() => TipoDireccion, (tipoDireccion) => tipoDireccion.direcciones)
    tipodirecciones: TipoDireccion[];

    @OneToMany(() => HistorialCompra, (historialCompra) => historialCompra.direccion)
    historialCompra: HistorialCompra[];
}