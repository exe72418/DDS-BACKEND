import { NextFunction, Request, Response } from 'express'
import { orm } from '../shared/db/orm.js'
import { Pedido } from '../models/pedido.entity.js'

const em = orm.em

async function findAll(req: Request, res: Response) {
  try {
    const pedidos = await em.find(Pedido, {}, { populate: ['cliente', 'lineas', 'pagos', 'entrega'] })
    res
      .status(200)
      .json({ message: 'Se encontraron los pedidos!', data: pedidos })
  } catch (error: any) {
    res.status(500).json({ message: error.message })
  }
}


async function findOne(req: Request, res: Response) {
  try {
    const nroPedido = Number.parseInt(req.params.nroPedido)
    const pedidoEncontrado = await em.findOneOrFail(Pedido, { nroPedido }, { populate: ['cliente', 'lineas', 'pagos', 'entrega'] })
    res
      .status(200)
      .json({ message: 'se encontro el pedido!', data: pedidoEncontrado })
  } catch (error: any) {
    res.status(500).json({ message: error.message })
  }
}


async function add(req: Request, res: Response) {
  try {
    const pedido = em.create(Pedido, req.body)
    const nuevaFecha = new Date()
    pedido.fecha = nuevaFecha
    await em.flush()
    res.status(201).json({ message: 'Pedido creado!', data: pedido })
  } catch (error: any) {
    res.status(500).json({ message: error.message })
  }
}


async function update(req: Request, res: Response) {
  try {
    const nroPedido = Number.parseInt(req.params.nroPedido)
    const pedidoToUpdate = await em.findOneOrFail(Pedido, { nroPedido })
    em.assign(pedidoToUpdate, req.body)
    await em.flush()
    res.status(200).json({ message: 'Pedido actualizado!', data: pedidoToUpdate })
  } catch (error: any) {
    res.status(500).json({ message: error.message })
  }
}

async function remove(req: Request, res: Response) {
  try {
    const nroPedido = Number.parseInt(req.params.nroPedido)
    const pedido = await em.findOneOrFail(Pedido, { nroPedido })
    await em.removeAndFlush(pedido)
    res.status(200).json({ message: 'Pedido borrado!' })
  } catch (error: any) {
    res.status(500).json({ message: error.message })
  }
}

export {
  findAll
  , findOne,
  add,
  update,
  remove
}