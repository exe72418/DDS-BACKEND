import { NextFunction, Request, Response } from 'express'
import { Cliente } from '../models/cliente.entity.js'
import { orm } from '../shared/db/orm.js'
import { Producto } from '../models/producto.entity.js'

const em = orm.em

async function findAll(req: Request, res: Response) {
    try {
      const productos = await em.find(Producto, {})
      res
        .status(200)
        .json({ message: 'Se encontraron los productos!', data: productos })
    } catch (error: any) {
      res.status(500).json({ message: error.message })
    }
  }


async function findOne(req: Request, res: Response) {
    try {
      const codigoProducto = Number.parseInt(req.params.codigoProducto)
      const productoEncontrado = await em.findOneOrFail(Producto, {codigoProducto})
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
        const codigoProducto = Number.parseInt(req.params.codigoProducto)
        if(codigoProducto){
          const producto = await em.findOne(Producto,{codigoProducto})
          em.assign({producto}, req.body)
          await em.flush()
          res.status(200).json({ message: 'producto actualizado!', data: producto })
        
        }
        } catch (error: any) {
      res.status(500).json({ message: error.message })
    }
  }

async function remove(req:Request, res:Response){
    try{
        const codigoProducto = Number.parseInt(req.params.id)
        const producto = await em.findOne(Producto,{codigoProducto})
        await em.removeAndFlush({producto})
        res.status(200).json({ message: 'producto borrado!' })
    } catch (error: any) {
    res.status(500).json({ message: error.message })
    } 
}

  export { findAll
    , findOne,
    add, 
    update, 
    remove 
    }