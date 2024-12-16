import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryColumn } from "typeorm";
import { Usuario } from "./usuario";
import { HistorialCompra } from "./historial_compra";
import { Direccion } from "./direccion";
import { CarritoInformacion } from "./carrito_informacion";


@Entity({name: "purchase"})
export class Purchase {
    @PrimaryColumn()
    id_compra: number;

    @PrimaryColumn()
    usuario_id: number;
    
    @Column()
    id_metodo_pago: number;

    @Column()
    fecha_compra: string;

    @Column()
    carrito_id: number;

    @Column()
    id_direccion: number;

    @OneToOne(() => Usuario)
    @JoinColumn({ name: 'usuario_id' })
    usuario: Usuario;

    @OneToOne(() => CarritoInformacion)
    @JoinColumn({ name: 'carrito_id' })
    carritoInformacion: CarritoInformacion;

    @OneToOne(() => Direccion)
    @JoinColumn({ name: 'id_direccion' })
    direccion: Direccion;

    @ManyToOne(() => HistorialCompra)
    @JoinColumn({ name: "id_compra" })
    historialCompra: HistorialCompra;
}







