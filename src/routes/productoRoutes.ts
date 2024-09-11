import { Router } from 'express';
import { findAll, findOne, add, update, remove } from '../controllers/productoController.js';

export const productoRouter = Router()

productoRouter.get('/', findAll)
productoRouter.get('/:codigo', findOne)
productoRouter.post('/', add)
productoRouter.put('/', update)
productoRouter.patch('/:codigo', update)
productoRouter.delete('/:codigo', remove)