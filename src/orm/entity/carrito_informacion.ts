import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from "typeorm";
import { Usuario } from "./usuario";
import { Purchase } from "src/purchases/entities/purchase.entity";
import { Carrito } from "./carrito";


@Entity({name: "carrito_informacion"})
export class CarritoInformacion {
    @PrimaryColumn()
    id_carrito: number;

    @PrimaryColumn()
    usuario_id: number;
    
    @Column()
    fecha_actualizacion: string;

    @Column()
    precio_total: number;

    @OneToOne(() => Usuario)
    @JoinColumn({ name: 'usuario_id' })
    usuario: Usuario;

    @OneToOne(() => CarritoInformacion, (carritoInformacion) => carritoInformacion.purchase)
    purchase: Purchase;
}