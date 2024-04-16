const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser'); // Only needed for Node.js versions below 14.x
const app = express(); // Create the app instance
app.use(bodyParser.json()); // Parses incoming JSON requests

const leerDatos = () => {
  try {
    const datos = fs.readFileSync('./db.json');
    return JSON.parse(datos);
  } catch (error) {
    console.log(error);
  }
};

const escribirDatos = (datos) => {
  try {
    fs.writeFileSync('./autos.json', JSON.stringify(datos));
  } catch (error) {
    console.log(error);
  }
};

app.get('/', (req, res) => {
  res.send('¡Bienvenido a mi API de alquiler de autos!');
});

app.get('/autos', (req, res) => {
  const datos = leerDatos();
  res.json(datos.autos);
});

app.get('/autos/:id', (req, res) => {
  const datos = leerDatos();
  const id = parseInt(req.params.id);
  const auto = datos.autos.find((auto) => auto.id === id);
  res.json(auto);
});

app.post('/autos', (req, res) => {
  const datos = leerDatos();
  const cuerpo = req.body;
  const nuevoAuto = {
    id: datos.autos.length + 1,
    ...cuerpo,
  };
  datos.autos.push(nuevoAuto);
  escribirDatos(datos);
  res.json(nuevoAuto);
});

app.put('/autos/:id', (req, res) => {
  const datos = leerDatos();
  const cuerpo = req.body;
  const id = parseInt(req.params.id);
  const indiceAuto = datos.autos.findIndex((auto) => auto.id === id);
  datos.autos[indiceAuto] = {
    ...datos.autos[indiceAuto],
    ...cuerpo,
  };
  escribirDatos(datos);
  res.json({ mensaje: 'Alquiler de auto actualizado exitosamente' });
});

app.delete('/autos/:id', (req, res) => {
  const datos = leerDatos();
  const id = parseInt(req.params.id);
  const indiceAuto = datos.autos.findIndex((auto) => auto.id === id);
  datos.autos.splice(indiceAuto, 1);
  escribirDatos(datos);
  res.json({ mensaje: 'Alquiler de auto eliminado exitosamente' });
});

app.listen(3000, () => {
  console.log('Servidor escuchando en el puerto 3000');
});
