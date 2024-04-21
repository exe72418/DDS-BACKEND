import { Repartidor } from "../models/Repartidor.js";
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
    public findOne(item: {nroDoc:number}): Repartidor | undefined {
        return repartidores.find((repartidor) => repartidor.nroDoc === item.nroDoc)
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
        console.log(item.nroDoc)
        const repartidorIdx = repartidores.findIndex((rep) => {
            console.log(rep.nroDoc + ' y ' + item.nroDoc)
            return rep.nroDoc.toString() === item.nroDoc.toString()
        })
        console.log(repartidorIdx)

        if (repartidorIdx !== -1) {
            item.nroDoc = parseInt(item.nroDoc.toString(),10)
          Object.assign(repartidores[repartidorIdx], item)
        }
        return repartidores[repartidorIdx]
    }
    public delete(item: {nroDoc:number}): Repartidor | undefined {
        const repartidorIdx = repartidores.findIndex((repartidor)=>repartidor.nroDoc === item.nroDoc)

        if(repartidorIdx !== -1){
            const repartidorBorrado = repartidores[repartidorIdx]
            repartidores.splice(repartidorIdx,1)
            return repartidorBorrado;
        }
    }

}