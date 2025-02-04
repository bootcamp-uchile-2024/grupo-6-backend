import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { Direccion } from "./direccion";
import { Resena } from "./resena";
import { HistorialCompra } from "./historial_compra";
import { Carrito } from "./carrito";
import { CarritoInformacion } from "./carrito_informacion";

@Entity({name: "usuario"})
export class Usuario {
    @PrimaryColumn()
    id: number;

    @Column()
    nombres: string;

    @Column()
    apellido_paterno: string;

    @Column()
    apellido_materno: string;

    @Column()
    correo_electronico: string;

    @Column()
    contrasena: string;

    @Column()
    rol: string;
    
    @Column()
    estado: string;

    @OneToMany(() => Direccion, (direccion) => direccion.usuario)
    direccion: Direccion[];

    @OneToMany(() => Resena, (resena) => resena.usuario)
    resena: Resena[];

    @OneToMany(() => HistorialCompra, (historialCompra) => historialCompra.usuario)
    historialCompra: HistorialCompra[];

    @OneToMany(() => CarritoInformacion, (carritoInformacion) => carritoInformacion.usuario)
    carritosInformacion: CarritoInformacion[];

}