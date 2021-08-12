const { Mixed } = require('mongoose');
var mongoose = require('mongoose');

var esquema = new mongoose.Schema({
    seccion: String,
    nombreClase: String,
    banner: String,
    descripcion: String,
    aula: String,
    asignaciones: Mixed,
    anuncios: Mixed
});

module.exports = mongoose.model('clases', esquema);

