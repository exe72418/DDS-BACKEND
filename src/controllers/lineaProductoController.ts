import { NextFunction, Request, Response } from 'express'
import { orm } from '../shared/db/orm.js'
import { LineaDeProducto } from '../models/lineaDeProducto.entity.js'

const em = orm.em

async function findAll(req: Request, res: Response) {
  try {
    const lineas = await em.find(LineaDeProducto, {}, { populate: ['producto'] })
    res
      .status(200)
      .json({ message: 'Se encontraron las lineas!', data: lineas })
  } catch (error: any) {
    res.status(500).json({ message: error.message })
  }
}

/*
async function findOne(req: Request, res: Response) {
  try {
    const pedido = req.params.pedido
    const nroPedido= pedido.nroPedido
    //const producto = Number.parseInt(req.params.producto)
    const lineaEncontrada = await em.findOneOrFail(LineaDeProducto, { nroPedido });
    res
      .status(200)
      .json({ message: 'se encontro la linea!', data: lineaEncontrada })
  } catch (error: any) {
    res.status(500).json({ message: error.message })
  }
}*/


async function add(req: Request, res: Response) {
  try {
    const linea = em.create(LineaDeProducto, req.body)
    await em.flush()
    res.status(201).json({ message: 'Linea creada!', data: linea })
  } catch (error: any) {
    res.status(500).json({ message: error.message })
  }
}

/*
async function update(req: Request, res: Response) {
  try {
    const codigo = Number.parseInt(req.params.codigo)
    const productoToUpdate = await em.findOneOrFail(Producto, { codigo })
    em.assign(productoToUpdate, req.body)
    await em.flush()
    res.status(200).json({ message: 'Producto actualizado!', data: productoToUpdate })
  } catch (error: any) {
    res.status(500).json({ message: error.message })
  }
}

async function remove(req: Request, res: Response) {
  try {
    const codigo = Number.parseInt(req.params.codigo)
    const producto = await em.findOneOrFail(Producto, { codigo })
    await em.removeAndFlush(producto)
    res.status(200).json({ message: 'Producto borrado!' })
  } catch (error: any) {
    res.status(500).json({ message: error.message })
  }
}*/

export {
  findAll, add//, findOne,update,remove
}