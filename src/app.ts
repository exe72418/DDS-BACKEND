import 'reflect-metadata'
import express from 'express'
import { clienteRouter } from './routes/clienteRoutes.js'
import { repartidorRouter } from './routes/repartidorRourtes.js'
import { tipoProductoRouter } from './routes/tipoProductoRoutes.js'
import { tipoPagoRouter } from './routes/tipoPagoRoutes.js'
import { orm, syncSchema } from './shared/db/orm.js'
import { RequestContext } from '@mikro-orm/core'

const app = express()
app.use(express.json())


app.use((_, res, next) => {
  RequestContext.create(orm.em, next)
})

app.use('/api/v2/clientes', clienteRouter)
app.use('/api/v2/repartidores', repartidorRouter)
app.use('/api/v2/tiposDeProducto', tipoProductoRouter)
app.use('/api/v2/tiposDePago', tipoPagoRouter)

app.use((_, res) => {
  return res.status(404).send({ message: 'No se encontro la ruta' })
})

//await syncSchema() //Falta corregir el tema del update, pero mientras no cambiemos las entidades no pasa nada

app.listen(3000, () => {
  console.log("Server corriendo en la ruta http://localhost:3000/")
})