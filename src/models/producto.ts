import { TipoProducto } from "./tipoProducto";

export class Producto {

    codigoProducto!:number;
    descripcion!:string;
    stock!:number;
    precio!:number;
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