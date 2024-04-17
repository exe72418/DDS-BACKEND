const express = require('express');
const morgan = require('morgan');
const myConnection = require('express-myconnection');
const app = express();
const path = require('path');
const mysql = require('mysql');
const routes = require("./routes/routes");

// settings
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// middelware
app.use(morgan('dev'));
app.use(myConnection(mysql, {
  host: 'localhost',
  user: 'root',
  password: '',
  port: 3306,
  database: "fast",
}, 'single'));
app.use(express.urlencoded({ extended: false }));

// routes
app.use('/', routes);

// static files
app.use(express.static(path.join(__dirname, 'public')));

// starting the server
app.listen(app.get('port'), () => {
  console.log('Servidor escuchando en el puerto 3000');
});
