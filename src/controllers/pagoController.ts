import { NextFunction, Request, Response } from 'express'
import { Pago } from '../models/pago.entity.js'
import { orm } from '../shared/db/orm.js'

const em = orm.em

async function findAll(req: Request, res: Response) {
  try {
    const pago = await em.find(Pago, {},{populate:['tipoPago']})
    res
      .status(200)
      .json({ message: 'Se encontraron los pagos!', data: pago })
  } catch (error: any) {
    res.status(500).json({ message: error.message })
  }
}

async function add(req: Request, res: Response) {
  try {
    const pago = em.create(Pago, req.body)
    await em.flush()
    res.status(201).json({ message: 'Pago creado!', data: pago })
  } catch (error: any) {
    res.status(500).json({ message: error.message })
  }
}



async function findOne(req: Request, res: Response) {
  try {
      const idPago = Number.parseInt(req.params.idPago);
      const pagoEncontrado = await em.findOneOrFail(Pago, { idPago });
      res.status(200).json({ message: 'Se encontró el pago!', data: pagoEncontrado });
  } catch (error: any) {
      res.status(500).json({ message: error.message });
  }
}


async function update(req: Request, res: Response) {
  try {
    const idPago = Number.parseInt(req.params.idPago);
    const pago = await em.findOneOrFail(Pago, { idPago });
    em.assign(Pago, req.body)
    await em.flush()
    res.status(200).json({ message: 'Pago actualizado!', data: pago })
  } catch (error: any) {
    res.status(500).json({ message: error.message })
  }
}


async function remove(req: Request, res: Response) {
  try {
      const idPago = Number.parseInt(req.params.idPago);
  
      
      // Encuentra la referencia del pago a eliminar
      const pago = await em.findOneOrFail(Pago, { idPago });
      
      // Elimina el pago
      await em.removeAndFlush(pago);

      res.status(200).json({ message: 'Pago borrado!' });
  } catch (error: any) {
      res.status(500).json({ message: error.message });
  }
}




export { findAll, add, findOne, remove,update }

