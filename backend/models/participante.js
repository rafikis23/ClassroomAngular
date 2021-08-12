const { Mixed } = require('mongoose');
var mongoose = require('mongoose');

var esquema = new mongoose.Schema({
    nombre: String,
    imagen: String,
    clases: Mixed
});

module.exports = mongoose.model('participantes', esquema);

