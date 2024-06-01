import { Entity, ManyToOne, PrimaryKey, PrimaryKeyProp, Property, OneToMany, Cascade, Collection, Rel } from "@mikro-orm/core";
import { Repartidor } from "./repartidor.entity.js";
import { Pedido } from "./pedido.entity.js";

@Entity()
export class Entrega {

    @PrimaryKey()
    fecha!: Date;

    @PrimaryKey({ nullable: false })
    lote!: number;

    // this is needed for proper type checks in `FilterQuery`
    [PrimaryKeyProp]?: ['fecha', 'lote'];

    @Property({ nullable: false })
    zona!: string;

    @ManyToOne({ entity: () => Repartidor, nullable: true })
    repartidor!: Rel<Repartidor>;

    @OneToMany(() => Pedido, (pedido) => pedido.entrega, { cascade: [Cascade.ALL], })
    pedidos = new Collection<Pedido>(this)

    /*constructor(
        fecha: Date,
        lote: number,
        zona: string,
        repartidor: Repartidor
    ) {
        this.fecha = fecha;
        this.lote = lote;
        this.zona = zona;
        this.repartidor = repartidor;
    }*/

}