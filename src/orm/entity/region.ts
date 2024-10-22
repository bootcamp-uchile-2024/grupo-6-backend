import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { Ciudad } from "./ciudad";

@Entity({name: "region"})
export class Region {
    @PrimaryColumn()
    id: number;
    
    @Column()
    nombre: string;

    @OneToMany(() => Ciudad, (ciudad) => ciudad.region)
    ciudad: Ciudad[];
}