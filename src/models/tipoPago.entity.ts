import { Entity, PrimaryKey, Property } from "@mikro-orm/core";

@Entity()
export class TipoPago {
    @PrimaryKey()
    codigoTipoPago!:number;
    @Property()
    nombre!:string;
    @Property()
    descripcion!:string;

    constructor(
      nombre: string,
      descripcion: string,
      ) {
        this.nombre=nombre;
        this.descripcion=descripcion;
       }
}