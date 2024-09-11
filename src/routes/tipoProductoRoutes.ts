import { Router } from 'express';
import { findAll, findOne, add, update, remove } from '../controllers/tipoProductoController.js';

export const tipoProductoRouter = Router()

tipoProductoRouter.get('/', findAll)
tipoProductoRouter.get('/:id', findOne)
tipoProductoRouter.post('/', add)
tipoProductoRouter.put('/', update)
tipoProductoRouter.patch('/:id', update)
tipoProductoRouter.delete('/:id', remove)