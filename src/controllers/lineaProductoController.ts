import { NextFunction, Request, Response } from 'express'
import { orm } from '../shared/db/orm.js'
import { LineaDeProducto } from '../models/lineaDeProducto.entity.js'

const em = orm.em

async function findAll(req: Request, res: Response) {
  try {
    const lineas = await em.find(LineaDeProducto, {})
    res
      .status(200)
      .json({ message: 'Se encontraron las lineas!', data: lineas })
  } catch (error: any) {
    res.status(500).json({ message: error.message })
  }
}

async function findOne(req: Request, res: Response) {
  try {
    const id = Number.parseInt(req.params.id)
    const lineaEncontrada = await em.findOneOrFail(LineaDeProducto, { id }, { populate: ['producto'] })
    res
      .status(200)
      .json({ message: 'se encontro la linea!', data: lineaEncontrada })
  } catch (error: any) {
    res.status(500).json({ message: error.message })
  }
}

async function add(req: Request, res: Response) {
  try {
    const linea = em.create(LineaDeProducto, req.body)
    await em.flush()
    res.status(201).json({ message: 'Linea creada!', data: linea })
  } catch (error: any) {
    res.status(500).json({ message: error.message })
  }
}


async function update(req: Request, res: Response) {
  try {
    const id = Number.parseInt(req.params.id)
    const lineaToUpdate = await em.findOneOrFail(LineaDeProducto, { id })
    em.assign(lineaToUpdate, req.body)
    await em.flush()
    res.status(200).json({ message: 'Linea actualizada!', data: lineaToUpdate })
  } catch (error: any) {
    res.status(500).json({ message: error.message })
  }
}

async function remove(req: Request, res: Response) {
  try {
    const id = Number.parseInt(req.params.id)
    const linea = await em.findOneOrFail(LineaDeProducto, { id })
    await em.removeAndFlush(linea)
    res.status(200).json({ message: 'Linea borrada!' })
  } catch (error: any) {
    res.status(500).json({ message: error.message })
  }
}

export {
  findAll, add, findOne, update, remove
}