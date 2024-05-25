import { Entity, PrimaryKey, Property } from "@mikro-orm/core";

@Entity()
export class Repartidor {
    @PrimaryKey()
    cuit!:number;
    @Property()
    vehiculo!:String;
    @Property()
    zona!:String;

    constructor(nroDoc:number, vehiculo:String, zona:String){
        this.cuit = nroDoc
        this.vehiculo = vehiculo
        this.zona = zona
    }
}