import { Entity, PrimaryKey, Property, OneToMany, Collection, Cascade } from "@mikro-orm/core";
import { Pedido } from "./pedido.entity.js";

@Entity()
export class Cliente {

  @PrimaryKey()
  cuit!: number;

  @Property()
  apellidoNombre!: string;

  @Property()
  telefono!: number;

  @Property()
  email!: string;

  @Property()
  domicilio!: string;

  @Property()
  zona!: string;

  @OneToMany(() => Pedido, (pedido) => pedido.cliente, { cascade: [Cascade.ALL], })
  pedidos = new Collection<Pedido>(this)

  /*constructor(
    cuit: number,
    apellidoNombre: string,
    telefono: number,
    email: string,
    domicilio: string,
  ) {
    this.cuit = cuit
    this.apellidoNombre = apellidoNombre;
    this.telefono = telefono;
    this.email = email;
    this.domicilio = domicilio;
  }*/
}