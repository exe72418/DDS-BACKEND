import { NextFunction, Request, Response } from 'express'
import { Cliente } from '../models/cliente.entity.js'
import { ClienteRepository } from '../dataAccess/clienteRepository.js'

const repository = new ClienteRepository

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

function findAll(req: Request, res: Response) {
  res.json(res.json({ data: repository.findAll() }))
}

function findOne(req: Request, res: Response) {

  const cliente = repository.findOne({ cuit: req.params.CUIT })
  if (!cliente) {
    return res.status(404).send({ message: 'No se encontro el cliente' })
  }

  res.json({ data: cliente })
}

function add(req: Request, res: Response) {
  const input = req.body.sanitizedInput

  const clienteInput = new Cliente(
    input.CUIT,
    input.apellidoNombre,
    input.telefono,
    input.email,
    input.domicilio)

  const cliente = repository.add(clienteInput)
  return res.status(201).send({ message: 'Se dio de alta el cliente', data: cliente })
}

function update(req: Request, res: Response) {

  req.body.sanitizedInput.CUIT = req.params.CUIT
  const cliente = repository.update(req.body.sanitizedInput)

  if (!cliente) {
    return res.status(404).send({ message: 'no se encontro el cliente' })
  }

  return res.status(200).send({ message: 'el cliente fue actualizado', data: cliente })
}


function remove(req: Request, res: Response) {

  const cliente = repository.delete({ cuit: req.params.CUIT })

  if (!cliente) {
    res.status(404).send({ message: 'no se encontro el cliente!' })
  } else {
    res.status(200).send({ message: 'cliente borrado correctamente', data: cliente })
  }
}

export { sanitizeClienteInput, findAll, findOne, add, update, remove }