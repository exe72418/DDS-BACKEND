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
    const id = Number.parseInt(req.params.id)
    const pagoEncontrado = await em.findOneOrFail(Pago, { id: id }, { populate: ['tipoPago'] });
    res
      .status(200)
      .json({ message: 'se encontro el pago!', data: pagoEncontrado })
  } catch (error: any) {
    res.status(500).json({ message: error.message })
  }
}


async function update(req: Request, res: Response) {
  try {
    const id = Number.parseInt(req.params.id);
    
    if (isNaN(id)) {
      return res.status(400).json({ message: 'Invalid id parameter' });
    }

    const pagoToUpdate = await em.findOneOrFail(Pago, { id: id }, { populate: ['tipoPago'] });

    em.assign(pagoToUpdate, req.body);
    await em.flush();
    
    res.status(200).json({ message: 'Pago actualizado!', data: pagoToUpdate });
  } catch (error: any) {
    if (error.name === 'EntityNotFoundError') {
      return res.status(404).json({ message: 'Pago not found' });
    }

    res.status(500).json({ message: error.message });
  }
}

async function remove(req: Request, res: Response) {
  try {
    const idPago = Number.parseInt(req.params.idPago, 10);

    if (isNaN(idPago)) {
      return res.status(400).json({ message: 'Invalid idPago parameter' });
    }

    // Delete by ID directly
    await em.nativeDelete(Pago, idPago);

    res.status(200).json({ message: 'Pago borrado!' });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
}



export { findAll, add, findOne,update,remove }

