import { Entity, ManyToOne, PrimaryKey, Property } from "@mikro-orm/core";
import { TipoProducto } from "./tipoProducto.entity.js";

@Entity()
export class Producto {
    @PrimaryKey()
    codigoProducto!:number;
    @Property()
    descripcion!:string;
    @Property()
    stock!:number;
    @Property()
    precio!:number;
    @ManyToOne({ entity: () => TipoProducto, nullable: true })
    tipoProducto!:TipoProducto;

    constructor (
        descripcion: string,
        precio: number,
        stock: number,
        tipoProducto:TipoProducto
    ) {
        this.descripcion=descripcion;
        this.stock=stock;
        this.precio=precio;
        this.tipoProducto=tipoProducto;
    }
}