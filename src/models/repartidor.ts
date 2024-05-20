export class Repartidor {
    cuit!:number;
    vehiculo!:String;
    zona!:String;

    constructor(nroDoc:number, vehiculo:String, zona:String){
        this.cuit = nroDoc
        this.vehiculo = vehiculo
        this.zona = zona
    }
}