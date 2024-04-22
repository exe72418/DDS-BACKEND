import express from 'express'
import { clienteRouter } from './routes/clienteRoutes.js'
import { repartidorRouter } from './routes/repartidorRourtes.js'

const app = express()
app.use(express.json())

app.use('/api/v1/clientes', clienteRouter)
app.use('/api/v1/repartidores',repartidorRouter)

app.use((_, res) => {
  return res.status(404).send({ message: 'No se encontro la ruta' })
})

app.listen(3000, () => {
  console.log("Server corriendo en la ruta http://localhost:3000/")
})