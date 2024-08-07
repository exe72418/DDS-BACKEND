import { Entity, ManyToOne, PrimaryKey, Property, Rel, OneToOne } from "@mikro-orm/core";
import { TipoPago } from "./tipoPago.entity.js";
import { Pedido } from "./pedido.entity.js";

@Entity()
export class Pago {
    @PrimaryKey()
    id?: number;

    @Property()
    fecha!: Date;

    @ManyToOne({ entity: () => TipoPago, nullable: false })
    tipoPago!: Rel<TipoPago>;

    @OneToOne(() => Pedido, { nullable: false })
    pedido!: Rel<Pedido>;

    /*constructor(
        fecha: Date,
        tipoPago: TipoPago
    ) {
        this.fecha = fecha;
        this.tipoPago = tipoPago;
    }*/
}