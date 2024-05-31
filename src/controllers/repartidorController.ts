import { NextFunction, Request, Response } from 'express'
import { Repartidor } from '../models/repartidor.entity.js';


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
  res.status(500).json({ message: 'Not Implemented' })
}

function findOne(req: Request, res: Response) {

  res.status(500).json({ message: 'Not Implemented' })
}

function add(req: Request, res: Response) {
  res.status(500).json({ message: 'Not Implemented' })
}

function update(req: Request, res: Response) {
  res.status(500).json({ message: 'Not Implemented' })
}


function remove(req: Request, res: Response) {

  res.status(500).json({ message: 'Not Implemented' })
}

export { sanitizeRepartidorInput, findAll, findOne, add, update, remove }