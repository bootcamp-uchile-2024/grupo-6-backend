import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";
import { Region } from "./region";
import { Comuna } from "./comuna";

@Entity({name: "ciudad"})
export class Ciudad {
    @PrimaryColumn()
    id: number;
    
    @Column()
    nombre: string;

    @Column()
    id_region: number;

    @ManyToOne(() => Region)
    @JoinColumn({ name: "id_region" })
    region: Region;

    @OneToMany(() => Comuna, (comuna) => comuna.ciudad)
    comuna: Comuna[];
}