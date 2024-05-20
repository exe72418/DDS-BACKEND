export class Repartidor {
    nroDoc!:number;
    vehiculo!:String;
    zona!:String;

    constructor(nroDoc:number, vehiculo:String, zona:String){
        this.nroDoc = nroDoc
        this.vehiculo = vehiculo
        this.zona = zona
    }
}