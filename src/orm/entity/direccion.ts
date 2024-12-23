import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";
import { HistorialCompra } from "./historial_compra";
import { TipoDireccion } from "./tipoDireccion";
import { Usuario } from "./usuario";

@Entity({name: "direccion"})
export class Direccion {
    @PrimaryColumn()
    id: number;
    
    @Column()
    id_usuario: number;

    @Column()
    calle: string;

    @Column()
    numero_calle: string;

    @Column()
    numero_departamento: string;

    @Column()
    informacion_adicional: string;
    
    @Column()
    nombre_comuna: string;

    @Column()
    nombre_ciudad: string;

    @Column()
    nombre_region: string;

    @Column()
    estado: string;

    @ManyToOne(() => Usuario)
    @JoinColumn({ name: "id_usuario" })
    usuario: Usuario;

    @ManyToMany(() => TipoDireccion, (tipoDireccion) => tipoDireccion.direcciones)
    tipodirecciones: TipoDireccion[];

    @OneToMany(() => HistorialCompra, (historialCompra) => historialCompra.direccion)
    historialCompra: HistorialCompra[];

}