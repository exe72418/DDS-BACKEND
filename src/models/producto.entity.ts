import { Entity, ManyToOne, PrimaryKey, Property, OneToMany, Collection, Cascade, Rel } from "@mikro-orm/core";
import { TipoProducto } from "./tipoProducto.entity.js";
import { LineaDeProducto } from "./lineaDeProducto.entity.js";

@Entity()
export class Producto {
    @PrimaryKey()
    codigoProducto!: number;
    @Property()
    descripcion!: string;
    @Property()
    stock!: number;
    @Property()
    precio!: number;
    @ManyToOne({ entity: () => TipoProducto, nullable: true })
    tipoProducto!: Rel<TipoProducto>;

    @OneToMany(() => LineaDeProducto, (lineaDeProducto) => lineaDeProducto.producto, { cascade: [Cascade.ALL], })
    lineas = new Collection<LineaDeProducto>(this)

    constructor(
        descripcion: string,
        precio: number,
        stock: number,
        tipoProducto: TipoProducto
    ) {
        this.descripcion = descripcion;
        this.stock = stock;
        this.precio = precio;
        this.tipoProducto = tipoProducto;
    }
}