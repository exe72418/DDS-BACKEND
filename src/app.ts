import 'reflect-metadata'
import express from 'express'
import cors from 'cors'
import { clienteRouter } from './routes/clienteRoutes.js'
import { repartidorRouter } from './routes/repartidorRourtes.js'
import { tipoProductoRouter } from './routes/tipoProductoRoutes.js'
import { tipoPagoRouter } from './routes/tipoPagoRoutes.js'
import { orm, syncSchema } from './shared/db/orm.js'
import { RequestContext } from '@mikro-orm/core'
import { entregaRouter } from './routes/entregaRoutes.js'
import { pagoRouter } from './routes/pagoRoutes.js'
import { productoRouter } from './routes/productoRoutes.js'


const app = express()
app.use(express.json())
app.use((_, res, next) => {
  RequestContext.create(orm.em, next)
})
app.use(cors());
const allowedOrigins = ['http://localhost:4200'];
const corsOptions = {
    origin: allowedOrigins
};
app.use(cors(corsOptions));

app.use('/api/v2/clientes', clienteRouter)
app.use('/api/v2/repartidores', repartidorRouter)
app.use('/api/v2/tiposDeProducto', tipoProductoRouter)
app.use('/api/v2/tiposDePago', tipoPagoRouter)
app.use('/api/v2/entregas', entregaRouter)
app.use('/api/v2/pago', pagoRouter)
app.use('/api/v2/producto', productoRouter)

app.use((_, res) => {
  return res.status(404).send({ message: 'No se encontro la ruta' })
})

//await syncSchema() //Se descomenta sol cuando hay que updatear algo del modelo. Se agregan columnas a una entity, se cambia el tipo de dato, etc

app.listen(3000, () => {
  console.log("Server corriendo en la ruta http://localhost:3000/")
})