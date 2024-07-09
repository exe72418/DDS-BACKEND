import { NextFunction, Request, Response } from 'express'
import { Entrega } from '../models/entrega.entity.js'
import { orm } from '../shared/db/orm.js'

const em = orm.em

async function findAll(req: Request, res: Response) {
  try {
    const entregas = await em.find(Entrega, {}, { populate: ['repartidor'] })
    res
      .status(200)
      .json({ message: 'Se encontraron las entregas!', data: entregas })
  } catch (error: any) {
    res.status(500).json({ message: error.message })
  }
}

async function findOne(req: Request, res: Response) {

}

async function add(req: Request, res: Response) {

  try {
    const entrega = em.create(Entrega, req.body)
    const nuevaFecha = new Date()
    entrega.fecha = nuevaFecha
    await em.flush()
    res.status(201).json({ message: 'Entrega creada!', data: entrega })
  } catch (error: any) {
    res.status(500).json({ message: error.message })
  }

}

async function update(req: Request, res: Response) {

}

async function remove(req: Request, res: Response) {

}

export { findAll, findOne, add, update, remove }