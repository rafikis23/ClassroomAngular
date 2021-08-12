const { Mixed } = require('mongoose');
var mongoose = require('mongoose');

var esquema = new mongoose.Schema({
    usuario: String,
    password: String,
    nombre: String,
    imagen: String,
    clases: Mixed
});

module.exports = mongoose.model('instructores', esquema);

