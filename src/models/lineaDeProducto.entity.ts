import { Entity, ManyToOne, PrimaryKey, Property, Rel } from "@mikro-orm/core";
import { Producto } from "./producto.entity.js";
import { Pedido } from "./pedido.entity.js";
@Entity()
export class LineaDeProducto {

    @PrimaryKey()
    idLineaProducto!: number;

    @Property()
    cantidad!: number;

    @Property()
    subtotal!: number;

    @ManyToOne({ entity: () => Producto, nullable: true })
    producto!: Rel<Producto>;

    @ManyToOne(() => Pedido, { nullable: false })
    pedido!: Rel<Pedido>;

    /*constructor(
        producto: Producto,
        cantidad: number,
        subtotal: number,
    ) {
        this.cantidad = cantidad;
        this.subtotal = subtotal;
        this.producto = producto;
    }*/
}
