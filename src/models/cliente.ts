export class Cliente {

  cuit!: string;
  apellidoNombre!: string;
  telefono!:number;
  email!:string;
  domicilio!:string;
  zona!:string;

  constructor(
    apellidoNombre: string,
    telefono: number,
    email: string,
    domicilio: string,
  ) { 
    this.apellidoNombre = apellidoNombre;
    this.telefono = telefono;
    this.email = email;
    this.domicilio = domicilio;
  }
}