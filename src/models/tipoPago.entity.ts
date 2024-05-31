import { Entity, PrimaryKey, Property, OneToMany, Collection, Cascade } from "@mikro-orm/core";
import { Pago } from "./pago.entity.js";

@Entity()
export class TipoPago {
  @PrimaryKey()
  codigoTipoPago!: number;
  @Property()
  nombre!: string;
  @Property()
  descripcion!: string;

  @OneToMany(() => Pago, (pago) => pago.tipoPago, { cascade: [Cascade.ALL], })
  tiposPagos = new Collection<Pago>(this)

  /*constructor(
    nombre: string,
    descripcion: string,
  ) {
    this.nombre = nombre;
    this.descripcion = descripcion;
  }*/
}