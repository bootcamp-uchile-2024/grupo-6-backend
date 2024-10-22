import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { Direccion } from "./direccion";
import { TipoDireccion } from "./tipoDireccion";

@Entity({name: "direccion_tipoDireccion"})
export class DireccionTipoDireccion {
    @PrimaryColumn()
    id_direccion: number;
    
    @PrimaryColumn()
    id_tipoDireccion: number;

    @ManyToOne(() => Direccion)
    @JoinColumn({ name: "id_direccion" })
    direccion: Direccion;

    @ManyToOne(() => TipoDireccion)
    @JoinColumn({ name: "id_tipoDireccion" })
    tipoDireccion: TipoDireccion;
}