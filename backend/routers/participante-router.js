var express = require('express');
var router = express.Router();
var participante = require('../models/participante');
var mongoose = require('mongoose');

//• Listar participantes de la clase seleccionada
router.get('/', function(req, res){
    participante.find({},{})
})
module.exports = router;