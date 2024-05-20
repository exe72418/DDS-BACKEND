export class TipoProducto {

    idTipoProducto!:number;
    nombre!:string;

    constructor(
        nombre: string,
    ){
        this.nombre=nombre;
    }
}