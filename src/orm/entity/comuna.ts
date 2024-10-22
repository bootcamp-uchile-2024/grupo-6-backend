import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";
import { Ciudad } from "./ciudad";
import { Direccion } from "./direccion";

@Entity({name: "comuna"})
export class Comuna {
    @PrimaryColumn()
    id: number;
    
    @Column()
    nombre: string;

    @Column()
    id_ciudad:number;

    @ManyToOne(() => Ciudad)
    @JoinColumn({ name: "id_ciudad" })
    ciudad: Ciudad;

    @OneToMany(() => Direccion, (direccion) => direccion.comuna)
    direccion: Direccion[];
}