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
  try {
    const id = Number.parseInt(req.params.id)
    const EntregaEncontrada = await em.findOneOrFail(Entrega, { id },{populate:['repartidor']})
    res
      .status(200)
      .json({ message: 'se encontro la entrega!', data: EntregaEncontrada })
  } catch (error: any) {
    res.status(500).json({ message: error.message })
  }
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
  try {
    const id = Number.parseInt(req.params.id)
    const entregaToUpdate = await em.findOneOrFail(Entrega, {id})
    em.assign(entregaToUpdate, req.body)
    await em.flush()
    res.status(200).json({ message: 'Entrega actualizada!', data: entregaToUpdate })
  } catch (error: any) {
    res.status(500).json({ message: error.message })
  }
}

async function remove(req: Request, res: Response) {
  try {
    const id = Number.parseInt(req.params.id)
    const entrega = await em.getReference(Entrega, id)
    await em.removeAndFlush(entrega)
    res.status(200).json({ message: 'Entrega borrada!' })
  } catch (error: any) {
    res.status(500).json({ message: error.message })
  }
}

export { findAll, findOne, add, update, remove }