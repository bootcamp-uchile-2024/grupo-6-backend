import { Column, DeleteDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Usuario } from "./usuario";
import { Carrito } from "./carrito";
import { estadoEnum } from "src/shoppingcart/enum/estado.enum";


@Entity({name: "carrito_informacion"})
export class CarritoInformacion {
    @PrimaryGeneratedColumn()
    id_carrito: number;

    @OneToOne(() => Carrito, (carrito) => carrito.carritoInformacion)
    carrito: Carrito;

    @ManyToOne(() => Usuario, (usuario) => usuario.carritosInformacion)
    @JoinColumn({ name: 'usuario_id' })
    usuario: Usuario;

    @Column()
    usuario_id: number;
    
    @Column()
    fecha_actualizacion: string;

    @Column()
    precio_total: number;

    @Column({type: 'enum', enum: estadoEnum})
    estado: estadoEnum;
}