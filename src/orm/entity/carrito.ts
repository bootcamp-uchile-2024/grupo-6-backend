import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";
import { Libro } from "./libro";
import { Usuario } from "./usuario";



@Entity({name: "carrito"})
export class Carrito {
    @PrimaryColumn()
    usuario_id: number;
    
    @PrimaryColumn()
    libro_id: number;

    @Column()
    cantidad: number;

    @ManyToOne(() => Usuario)
    @JoinColumn({ name: "usuario_id" })
    usuario: Usuario;

    @OneToMany(() => Libro, (libro) => libro.carrito)
    libros: Libro[];
/*
    @ManyToMany(() => Usuario, (usuario) => usuario.carrito)
    @JoinTable({ name: 'carrito_usuario',
        joinColumn: {
            name: 'id_dispositivo',
            referencedColumnName: 'id',
        },
        inverseJoinColumn: {
            name: 'usuario_id',
            referencedColumnName: 'id',
        },
    })
    arriendo: Arriendo[];

    @ManyToMany(() => Dispositivo, (dispositivo) => dispositivo.arriendo)
    dispositivo: Dispositivo[];*/
}