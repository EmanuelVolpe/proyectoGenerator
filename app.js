const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const logger = require('morgan');


// NO OLVIDARSE SI VOY A USAR ARCHIVOS DE ENTORNOS.ENV
const dotenv = require('dotenv')
dotenv.config({ path: './.env' })
const port = process.env.PORT || 8000;

const usuariosRouter = require('./routes/usuariosRouter');
const librosRouter = require('./routes/librosRouter');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'public')));

app.use('/libros', librosRouter);
app.use('/usuarios', usuariosRouter);

const conn = require('./connection/connection')

// VARIABLES DE SESION
/* const session = require('express-session')
app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true
})) */


app.listen(port, () => {
  console.log(`SERVER corriendo en http://localhost:${port}`);
});

