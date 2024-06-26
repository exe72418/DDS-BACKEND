import { Entity, ManyToOne, PrimaryKey, Property, Rel } from "@mikro-orm/core";
import { TipoPago } from "./tipoPago.entity.js";
import { Pedido } from "./pedido.entity.js";

@Entity()
export class Pago {
    @PrimaryKey()
    idPago!: number;

    @Property()
    fecha!: Date;

    @ManyToOne({ entity: () => TipoPago, nullable: true })
    tipoPago!: Rel<TipoPago>;

    @ManyToOne(() => Pedido, { nullable: false })
    pedido!: Rel<Pedido>;

    /*constructor(
        fecha: Date,
        tipoPago: TipoPago
    ) {
        this.fecha = fecha;
        this.tipoPago = tipoPago;
    }*/
}