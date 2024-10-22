import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryColumn } from "typeorm";
import { Direccion } from "./direccion";

@Entity({name: "tipoDireccion"})
export class TipoDireccion {
    @PrimaryColumn()
    id: number;
  
    @Column()
    descripcion: string;

    @ManyToMany(() => Direccion)
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