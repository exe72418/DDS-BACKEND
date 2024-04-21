import { Router } from "express";
import { sanitizeRepartidorInput, findAll, findOne, add, update, remove } from '../controllers/repartidorController.js';


export const repartidorRouter = Router()

repartidorRouter.get('/', findAll)
repartidorRouter.get('/:nroDoc', findOne)
repartidorRouter.post('/', sanitizeRepartidorInput, add)
repartidorRouter.put('/:nroDoc', sanitizeRepartidorInput, update)
repartidorRouter.patch('/:nroDoc', sanitizeRepartidorInput, update)
repartidorRouter.delete('/:nroDoc', sanitizeRepartidorInput, remove)