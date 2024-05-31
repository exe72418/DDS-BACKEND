import { Cliente } from "./cliente.entity.js";
import { Entrega } from "./entrega.entity.js";
import { Pago } from "./pago.entity.js";
import { LineaDeProducto } from "./lineaDeProducto.entity.js";
import { Cascade, Collection, Entity, ManyToOne, OneToMany, PrimaryKey, Property, Rel } from "@mikro-orm/core";

@Entity()
export class Pedido {
    @PrimaryKey()
    nroPedido!: number;

    @Property()
    fecha!: Date;

    @Property()
    total!: number;

    @ManyToOne(() => Cliente, { nullable: true })
    cliente!: Rel<Cliente>;

    @ManyToOne({ entity: () => Entrega, nullable: true })
    entrega!: Rel<Entrega>;

    @OneToMany(() => Pago, pago => pago.pedido, { mappedBy: pago => pago.pedido, cascade: [Cascade.ALL] })
    pagos = new Collection<Pago>(this);

    @OneToMany(() => LineaDeProducto, lineaDeProducto => lineaDeProducto.pedido, { mappedBy: lineaDeProducto => lineaDeProducto.pedido, cascade: [Cascade.ALL] })
    lineas = new Collection<LineaDeProducto>(this);

    /*constructor(
        fecha: Date,
        total: number,
        cliente: Cliente,
        entrega: Entrega,
        pagos: Pago[],
        lineas: LineaDeProducto[],
    ) {
        this.fecha = fecha;
        this.total = total;
        this.cliente = cliente;
        this.entrega = entrega;

    }*/
}