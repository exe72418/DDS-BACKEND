import { NextFunction, Request, Response } from 'express'
import { Cliente } from '../models/cliente.entity.js'


function sanitizeClienteInput(req: Request, res: Response, next: NextFunction) {

  req.body.sanitizedInput = {
    CUIT: req.body.CUIT,
    apellidoNombre: req.body.apellidoNombre,
    telefono: req.body.telefono,
    email: req.body.email,
    domicilio: req.body.domicilio
  }

  Object.keys(req.body.sanitizedInput).forEach((key) => {
    if (req.body.sanitizedInput[key] === undefined) {
      delete req.body.sanitizedInput[key]
    }
  })

  next()
}

async function findAll(req: Request, res: Response) {
  res.status(500).json({ message: 'Not Implemented' })
}

async function findOne(req: Request, res: Response) {

  res.status(500).json({ message: 'Not Implemented' })
}

async function add(req: Request, res: Response) {

  res.status(500).json({ message: 'Not Implemented' })
}

async function update(req: Request, res: Response) {

  res.status(500).json({ message: 'Not Implemented' })
}

async function remove(req: Request, res: Response) {

  res.status(500).json({ message: 'Not Implemented' })
}

export { sanitizeClienteInput, findAll, findOne, add, update, remove }