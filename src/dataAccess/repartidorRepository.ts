import { Repartidor } from "../models/repartidor.entity.js";
import { Repository } from "../shared/repository";

const repartidores: Repartidor[] = [
    new Repartidor(123456, "Motocicleta", "Centro"),
    new Repartidor(789012, "Bicicleta", "Zona Norte"),
    new Repartidor(345678, "Furgoneta", "Zona Sur")
  ];


export class RepartidorRepository implements Repository<Repartidor>{
    public findAll(): Repartidor[] | undefined {
        return repartidores
    }
    public findOne(item: {cuit:number}): Repartidor | undefined {
        return repartidores.find((repartidor) => repartidor.cuit === item.cuit)
    }
    public add(item: Repartidor): Repartidor | undefined {
        repartidores.push(item);
        return item;
    }
    public update(item: Repartidor): Repartidor | undefined {
        /* let index! : number;
        const repartidorIdx = repartidores.filter((repartidor,i) =>{ 
            if(repartidor.nroDoc == item.nroDoc){index = i}
            repartidor.nroDoc === item.nroDoc;
         })
        console.log(item)
        console.log(repartidorIdx)
        if (repartidorIdx !== null && index !== undefined) {
            repartidores[index] = { ...repartidores[index], ...item }
            return item;
        } */
        console.log(item.cuit)
        const repartidorIdx = repartidores.findIndex((rep) => {
            console.log(rep.cuit + ' y ' + item.cuit)
            return rep.cuit.toString() === item.cuit.toString()
        })
        console.log(repartidorIdx)

        if (repartidorIdx !== -1) {
            item.cuit = parseInt(item.cuit.toString(),10)
          Object.assign(repartidores[repartidorIdx], item)
        }
        return repartidores[repartidorIdx]
    }
    public delete(item: {cuit:number}): Repartidor | undefined {
        const repartidorIdx = repartidores.findIndex((repartidor)=>repartidor.cuit === item.cuit)

        if(repartidorIdx !== -1){
            const repartidorBorrado = repartidores[repartidorIdx]
            repartidores.splice(repartidorIdx,1)
            return repartidorBorrado;
        }
    }

}