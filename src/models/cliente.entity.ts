import { Entity, PrimaryKey, Property } from "@mikro-orm/core";

@Entity()
export class Cliente {
  
  @PrimaryKey()
  cuit!: string;

  @Property()
  apellidoNombre!: string;

  @Property()
  telefono!:number;

  @Property()
  email!:string;

  @Property()
  domicilio!:string;

  @Property()
  zona!:string;

  constructor(
    cuit:string,
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
  }
}