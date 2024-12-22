import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Usuario } from "./usuario";
import { HistorialCompra } from "./historial_compra";
import { Direccion } from "./direccion";
import { CarritoInformacion } from "./carrito_informacion";


@Entity({name: "purchase"})
export class Purchase {
    @PrimaryGeneratedColumn()
    id_compra: number;

    @ManyToOne(() => Usuario, (usuario) => usuario.compras)
    @JoinColumn({ name: 'usuario_id' })
    usuario: Usuario;
    
    @Column()
    id_metodo_pago: number;

    @Column()
    fecha_compra: string;

    /*@ManyToOne(() => CarritoInformacion, (carritoInformacion) => carritoInformacion.usuario)
    @JoinColumn({ name: 'id_carrito' })
    carrito: CarritoInformacion;*/

    @Column()
    id_direccion: number;

    @ManyToOne(() => Direccion, (direccion) => direccion.compras)
    @JoinColumn({ name: 'id_direccion' })
    direccion: Direccion;
}







