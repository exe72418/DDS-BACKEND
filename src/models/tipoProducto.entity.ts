import { Entity, PrimaryKey, Property } from "@mikro-orm/core";

@Entity()
export class TipoProducto {
    @PrimaryKey()
    idTipoProducto!:number;
    @Property()
    nombre!:string;

    constructor(
        nombre: string,
    ){
        this.nombre=nombre;
    }
}