import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { Direccion } from "./direccion";
import { Resena } from "./resena";
import { HistorialCompra } from "./historial_compra";
import { Carrito } from "./carrito";

@Entity({name: "usuario"})
export class Usuario {
    @PrimaryColumn()
    id: number;

    @Column()
    nombre: string;

    @Column()
    segundo_nombre:string;

    @Column()
    apellido_paterno: string;

    @Column()
    apellido_materno: string;

    @Column()
    correo_electronico: string;

    @Column()
    contrasena: string;

    @OneToMany(() => Direccion, (direccion) => direccion.usuario)
    direccion: Direccion[];

    @OneToMany(() => Resena, (resena) => resena.usuario)
    resena: Resena[];

    @OneToMany(() => HistorialCompra, (historialCompra) => historialCompra.usuario)
    historialCompra: HistorialCompra[];

    @OneToMany(() => Carrito, (carrito) => carrito.usuario)
    carritos: Carrito[];
}