var express = require('express');
var cors = require('cors'); //Para gestionar politicas de dominios cruzados
var bodyParser = require('body-parser');
var database = require('./modules/database');
var clasesRouter = require('./routers/clase-router');
var instructoresRouter = require('./routers/instructor-router');
var participantesRouter = require('./routers/participante-router');

var app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/clases', clasesRouter);
app.use('/instructores', instructoresRouter);
app.use('/participantes', participantesRouter);

app.listen(8888, ()=>{
    console.log('Servidor del backend levantado en 8888');
});