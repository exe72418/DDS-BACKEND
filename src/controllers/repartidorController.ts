import { NextFunction, Request, Response } from 'express'
import { RepartidorRepository } from "../dataAccess/repartidorRepository.js";
import { Repartidor } from '../models/repartidor.js';

const repository = new RepartidorRepository()

function sanitizeRepartidorInput(req: Request, res: Response, next: NextFunction) {

    req.body.sanitizedInput = {
      nroDoc: req.body.nroDoc,
      vehiculo: req.body.vehiculo,
      zona: req.body.zona,
    }
  
    Object.keys(req.body.sanitizedInput).forEach((key) => {
      if (req.body.sanitizedInput[key] === undefined) {
        delete req.body.sanitizedInput[key]
      }
    })
  
    next()
  }


function findAll(req: Request, res: Response) {
    res.json(res.json({ data: repository.findAll() }))
}
  
function findOne(req: Request, res: Response) {
  
    const repartidor = repository.findOne({ nroDoc: parseInt(req.params.nroDoc) })
    if (!repartidor) {
      return res.status(404).send({ message: 'No se encontro el repartidor' })
    }
  
    res.json({ data: repartidor })
}
  
function add(req: Request, res: Response) {
    const input = req.body.sanitizedInput
  
    const repartidor = new Repartidor(
        input.nroDoc,
        input.vehiculo,
        input.zona,
    )
    
  
    const repartidorNuevo = repository.add(repartidor)
    return res.status(201).send({ message: 'Se dio de alta el repartidor', data: repartidorNuevo })
}
  
function update(req: Request, res: Response) {
    req.body.sanitizedInput.nroDoc = req.params.nroDoc
    const repartidor = repository.update(req.body.sanitizedInput)
    console.log(repartidor)
    if (!repartidor) {
      return res.status(404).send({ message: 'no se encontro el repartidor' })
    }
  
    return res.status(200).send({ message: 'el repartidor fue actualizado', data: repartidor })
}
  
  
  function remove(req: Request, res: Response) {
  
    const repartidor = repository.delete({ nroDoc: parseInt(req.params.nroDoc) })
  
    if (!repartidor) {
      res.status(404).send({ message: 'no se encontro el repartidor!' })
    } else {
      res.status(200).send({ message: 'repartidor borrado correctamente', data: repartidor })
    }
  }
  
  export { sanitizeRepartidorInput, findAll, findOne, add, update, remove }