import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { DireccionTipoDireccion } from "./direccion_tipoDireccion";

@Entity({name: "tipoDireccion"})
export class TipoDireccion {
    @PrimaryColumn()
    id: number;
  
    @Column()
    descripcion: string;

    @OneToMany(() => DireccionTipoDireccion, (direccionTipoDireccion) => direccionTipoDireccion.tipoDireccion)
    direccionTipoDireccion: DireccionTipoDireccion[];
}