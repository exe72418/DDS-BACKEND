import { Entity, PrimaryKey, Property, OneToMany, Collection, Cascade } from "@mikro-orm/core";
import { Producto } from "./producto.entity.js";

@Entity()
export class TipoProducto {
    @PrimaryKey()
    idTipoProducto!: number;
    @Property()
    nombre!: string;

    @OneToMany(() => Producto, (producto) => producto.tipoProducto, { cascade: [Cascade.ALL], })
    productos = new Collection<Producto>(this)

    constructor(
        nombre: string,
    ) {
        this.nombre = nombre;
    }
}