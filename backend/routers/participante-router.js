var express = require('express');
var router = express.Router();
var participante = require('../models/participante');
var mongoose = require('mongoose');

// Agregar un nuevo participante
router.post('/participante', function(req, res){
    let c = new participante({
        _id: mongoose.Types.ObjectId(),
        nombre: req.body.nombre,
        imagen: req.body.imagen,
        "clases._id":req.body.idClase,
        "clases.nombreClase":req.body.nombreClase
    });
    c.save()
        .then(data=>{
            res.send(data);
            res.end();
        })
        .catch(error=>{
            res.send(error);
            res.end();
        })
});
module.exports = router;