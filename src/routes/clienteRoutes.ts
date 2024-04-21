import { Router } from 'express';
import { sanitizeClienteInput, findAll, findOne, add, update, remove } from '../controllers/clienteController.js';

export const clienteRouter = Router()

clienteRouter.get('/', findAll)
clienteRouter.get('/:CUIT', findOne)
clienteRouter.post('/', sanitizeClienteInput, add)
clienteRouter.put('/:CUIT', sanitizeClienteInput, update)
clienteRouter.patch('/:CUIT', sanitizeClienteInput, update)
clienteRouter.delete('/:CUIT', sanitizeClienteInput, remove)