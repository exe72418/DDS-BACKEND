import { Router } from 'express';
import { findAll, findOne, add, update, remove } from '../controllers/clienteController.js';

export const clienteRouter = Router()

clienteRouter.get('/', findAll)
clienteRouter.get('/:id', findOne)
clienteRouter.post('/', add)
clienteRouter.put('/', update)
clienteRouter.patch('/:id', update)
clienteRouter.delete('/:id', remove)