import { NextFunction, Request, Response } from 'express'
import { orm } from '../shared/db/orm.js'
import { Producto } from '../models/producto.entity.js'

const em = orm.em

async function findAll(req: Request, res: Response) {
  try {
    const productos = await em.find(Producto, {}, { populate: ['tipoProducto'] })
    res
      .status(200)
      .json({ message: 'Se encontraron los productos!', data: productos })
  } catch (error: any) {
    res.status(500).json({ message: error.message })
  }
}


async function findOne(req: Request, res: Response) {
  try {
    const codigo = Number.parseInt(req.params.codigo)
    const productoEncontrado = await em.findOneOrFail(Producto, { codigo }, { populate: ['tipoProducto'] })
    res
      .status(200)
      .json({ message: 'se encontro el producto!', data: productoEncontrado })
  } catch (error: any) {
    res.status(500).json({ message: error.message })
  }
}


async function add(req: Request, res: Response) {
  try {
    const producto = em.create(Producto, req.body)
    await em.flush()
    res.status(201).json({ message: 'Producto creado!', data: producto })
  } catch (error: any) {
    res.status(500).json({ message: error.message })
  }
}


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
}

export {
  findAll
  , findOne,
  add,
  update,
  remove
}