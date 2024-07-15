import { Router } from 'express';
import { findAll, findOne, add, update, remove } from '../controllers/pagoController.js';


export const pagoRouter = Router()

pagoRouter.get('/', findAll)
pagoRouter.get('/:id', findOne)
pagoRouter.post('/', add)
pagoRouter.put('/:id', update)
pagoRouter.patch('/:id', update)
pagoRouter.delete('/:id', remove)