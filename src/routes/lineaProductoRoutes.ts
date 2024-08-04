import { Router } from 'express';
import { findAll, findOne, add, update, remove } from '../controllers/productoController.js';

export const lineasRouter = Router()

lineasRouter.get('/', findAll)
lineasRouter.get('/:pedido', findOne)
lineasRouter.post('/', add)
lineasRouter.put('/:pedido,producto', update)
lineasRouter.patch('/:pedido,producto', update)
lineasRouter.delete('/:pedido,producto', remove)