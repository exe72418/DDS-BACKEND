export class Cliente {
  constructor(
    public CUIT: string,
    public apellidoNombre: string,
    public telefono: number,
    public email: string,
    public domicilio: string,
  ) { }
}