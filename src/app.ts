import express from 'express'
import { clienteRouter } from './routes/clienteRoutes.js'

const app = express()
app.use(express.json())

app.use('/api/clientes', clienteRouter)

app.use((_, res) => {
  return res.status(404).send({ message: 'No se encontro la ruta' })
})

app.listen(3000, () => {
  console.log("Server corriendo en la ruta http://localhost:3000/")
})