import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Usuario } from "./usuario";
import { Purchase } from "src/purchases/entities/purchase.entity";
import { Carrito } from "./carrito";
import { estadoEnum } from "src/shoppingcart/enum/estado.enum";


@Entity({name: "carrito_informacion"})
export class CarritoInformacion {
    @PrimaryGeneratedColumn()
    id_carrito: number;

    @ManyToOne(() => Usuario, (usuario) => usuario.carritosInformacion)
    @JoinColumn({ name: 'usuario_id' })
    usuario: Usuario;
    
    @Column()
    fecha_actualizacion: string;

    @Column()
    precio_total: number;

    @Column()
    estado: estadoEnum;    
}