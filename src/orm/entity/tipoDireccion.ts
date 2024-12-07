import { Column, Entity, JoinTable, ManyToMany, PrimaryColumn } from "typeorm";
import { Direccion } from "./direccion";

@Entity({name: "tipoDireccion"})
export class TipoDireccion {
    @PrimaryColumn()
    id: number;
  
    @Column()
    descripcion: string;

    @ManyToMany(() => Direccion, (direccion) => direccion.tipodirecciones)
    @JoinTable({ name: 'direccion_tipoDireccion',
        joinColumn: {
            name: 'id_tipoDireccion',
            referencedColumnName: 'id',
        },
        inverseJoinColumn: {
            name: 'id_direccion',
            referencedColumnName: 'id',
        },
    })
    direcciones: Direccion[];
}