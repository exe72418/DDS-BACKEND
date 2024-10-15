import { Cliente } from "./cliente.entity.js";
import { Entrega } from "./entrega.entity.js";
import { Pago } from "./pago.entity.js";
import { LineaDeProducto } from "./lineaDeProducto.entity.js";
import { Cascade, Collection, Entity, ManyToOne, OneToMany, PrimaryKey, Property, Ref, Rel, OneToOne } from "@mikro-orm/core";

@Entity()
export class Pedido {
    @PrimaryKey()
    nroPedido?: number

    @Property()
    fecha!: Date;

    @Property()
    total!: number;

    @ManyToOne(() => Cliente, { nullable: false })
    cliente!: Ref<Cliente>;

    @ManyToOne({ entity: () => Entrega, nullable: true })
    entrega!: Rel<Entrega>;

    @OneToOne(() => Pago, { nullable: true })
    pago!: Rel<Pago>;

    @OneToMany(() => LineaDeProducto, lineaDeProducto => lineaDeProducto.pedido, { mappedBy: lineaDeProducto => lineaDeProducto.pedido, cascade: [Cascade.ALL] })
    lineas = new Collection<LineaDeProducto>(this);

    /* constructor(
        fecha: Date,
        total: number,
        cliente: Ref<Cliente>,
        entrega: Entrega,
        pago: Pago,
        lineas: Collection<LineaDeProducto>,
    ) {
        this.fecha = fecha;
        this.total = total;
        this.cliente = cliente;
        this.entrega = entrega;
        this.pago = pago;
        this.lineas = lineas
    } */
}