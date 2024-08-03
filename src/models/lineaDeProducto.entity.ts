import { Entity, ManyToOne, PrimaryKey, Property, Rel } from "@mikro-orm/core";
import { Producto } from "./producto.entity.js";
import { Pedido } from "./pedido.entity.js";
@Entity()
export class LineaDeProducto {

    @ManyToOne({ entity: () => Producto, primary: true, nullable: false })
    producto!: Rel<Producto>;

    @ManyToOne(() => Pedido, { primary: true, nullable: false })
    pedido!: Rel<Pedido>;

    @Property()
    cantidad!: number;

    @Property()
    subtotal!: number;

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
