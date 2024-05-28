import { Entity, ManyToOne, PrimaryKey, PrimaryKeyProp, Property } from "@mikro-orm/core";
import { Repartidor } from "./repartidor.entity.js";

@Entity()
export class Entrega {

    @PrimaryKey()
    fecha!:Date;

    @PrimaryKey()
    lote!:number;

      // this is needed for proper type checks in `FilterQuery`
    [PrimaryKeyProp]?: ['fecha', 'lote'];

    @Property()
    zona!:string;

    @ManyToOne({ entity: () => Repartidor, nullable: true })
    repartidor!:Repartidor;

    constructor (
        fecha: Date,
        lote: number,
        zona: string,
        repartidor:Repartidor
    ) {
        this.fecha = fecha;
        this.lote= lote;
        this.zona = zona;
        this.repartidor = repartidor;
    }
}