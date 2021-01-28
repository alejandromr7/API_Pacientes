const express = require('express');
require('dotenv');
const routes = require('./routes');
const path = require('path');
const cors = require('cors');

// Crear la conexion a la base de datos
const db = require('./config/db');

require('./models/Proyectos');

db.sync()
    .then( () => console.log(`Conectado a http://localhost:4000/`))
    .catch( (err) => console.error(err) )

// crear app de express 
const app = express();

// Habilitar cors
app.use(cors());

// Cargar archivos estaticos
app.use(express.static('public'));

// Habilitar body parser para leer datos del formulario
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use('/', routes());


const host = process.env.HOST || '0.0.0.0'

app.listen(process.env.PORT || 4000, process.env.HOST , ()=>{
    console.log('Server ok')
});


