var express = require('express');
var router = express.Router();
var instructor = require('../models/instructor');
var mongoose = require('mongoose');

//Visualizar el listado de instructores
router.get('/', function(req, res){
    instructor.find({}, {_id: true, nombre:true, imagen:true})
    .then((data)=>{
        res.send(data);
        res.end();
    })
    .catch((error)=>{
        res.send(error);
        res.end();
    })
}); 
//y al dar click listar las clases correspondientes a dicho instructor (esquina superior derecha)
router.get('/:idInstructor/listadoClases', function(req, res){
    instructor.aggregate([
        {
            $lookup:{
                from: "clases",
                localField:"clases._id",
                foreignField: "_id",
                as: "clases"
            }
        },
        {
            $match:{
                _id:mongoose.Types.ObjectId(req.params.idInstructor)
            }
        },
        {
            $project:{
                "_id":true,
                "nombre":true,
                "imagen":true,
                "clases._id":true,
                "clases.seccion":true,
                "clases.nombreClase":true,
                "clases.banner":true,
                "clases.asignaciones._id":true,
                "clases.asignaciones.titulo":true,
                "clases.asignaciones.fecha":true
            }
        }
    ])
    .then((data)=>{
        res.send(data[0]);
        res.end();
    })
    .catch((error)=>{
        res.send(error);
        res.end();
    })
});
//Visualizar lista de miniaturas de las clases (se muestran al dar click en el botón del menú de la izquierda)
router.get('/:idInstructor/miniaturaClases', function(req, res){
    instructor.aggregate([
        {
            $lookup:{
                from: "clases",
                localField:"clases._id",
                foreignField: "_id",
                as: "clases"
            }
        },
        {
            $match:{
                _id:mongoose.Types.ObjectId(req.params.idInstructor)
            }
        },
        {
            $project:{
                "_id":true,
                "nombre":true,
                "imagen":true,
                "clases._id":true,
                "clases.nombreClase":true,
                "clases.banner":true
            }
        }
    ])
    .then((data)=>{
        res.send(data[0]);
        res.end();
    })
    .catch((error)=>{
        res.send(error);
        res.end();
    })
});
// Agregar un nuevo instructor
router.post('/instructor', function(req, res){
    let c = new instructor({
        _id: mongoose.Types.ObjectId(),
        usuario: req.body.usuario,
        password: req.body.password,
        nombre:req.body.nombre,
        imagen:req.body.imagen,
        clases:[]
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