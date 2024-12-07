import { Entity, PrimaryColumn } from "typeorm";

@Entity({name: "direccion_tipoDireccion"})
export class DireccionTipoDireccion {
    @PrimaryColumn()
    id_direccion: number;
    
    @PrimaryColumn()
    id_tipoDireccion: number;
}