var express = require('express');
var router = express.Router();
var clase = require('../models/clase');
var mongoose = require('mongoose');

//• Visualizar el detalle de una clase (Al dar click en una clase en particular)
router.get('/:idClase/detalleClase', function(req, res){
    clase.aggregate([
        {
            $lookup:{
                from: "instructores",
                localField:"_id",
                foreignField:"clases._id",
                as: "instructores"
            }
        },
        {
            $match:{
                _id:mongoose.Types.ObjectId(req.params.idClase)
            }
        },
        {
            $project:{
                "_id":true,
                "seccion":true,
                "nombreClase":true,
                "banner":true,
                "descripcion":true,
                "aula":true,
                "asignaciones.titulo":true,
                "asignaciones.fecha":true,
                "anuncios.mensaje":true,
                "anuncios.fecha":true,
                "anuncios.hora":true,
                "instructores.nombre":true,
                "instructores.imagen":true,
                "anuncios.comentarios.usuario":true,
                "anuncios.comentarios.mensaje":true,
                "anuncios.comentarios.hora":true
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
//• Visualizar los anuncios de una clase
router.get('/:idClase/anuncios', function(req, res){
    clase.aggregate([
        {
            $lookup:{
                from: "instructores",
                localField:"_id",
                foreignField:"clases._id",
                as: "instructores"
            }
        },
        {
            $match:{
                _id:mongoose.Types.ObjectId(req.params.idClase)
            }
        },
        {
            $project:{
                "_id":true,
                "anuncios.mensaje":true,
                "anuncios.fecha":true,
                "anuncios.hora":true,
                "instructores.nombre":true,
                "instructores.imagen":true
                /* "anuncios.comentarios.usuario":true,
                "anuncios.comentarios.mensaje":true,
                "anuncios.comentarios.hora":true */
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

//• Visualizar los comentarios de un anuncio
router.get('/:idClase/comentarios', function(req, res){
    clase.aggregate([
        {
            $lookup:{
                from: "instructores",
                localField:"_id",
                foreignField:"clases._id",
                as: "instructores"
            }
        },
        {
            $match:{
                _id:mongoose.Types.ObjectId(req.params.idClase)
            }
        },
        {
            $project:{
                "_id":true,
                "instructores.nombre":true,
                "instructores.imagen":true,
                "anuncios.comentarios.usuario":true,
                "anuncios.comentarios.mensaje":true,
                "anuncios.comentarios.hora":true
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
// • Listar asignaciones de la clase seleccionada
router.get('/:idClase/asignaciones', function(req, res){
    clase.aggregate([
        {
            $lookup:{
                from: "instructores",
                localField:"_id",
                foreignField:"clases._id",
                as: "instructores"
            }
        },
        {
            $match:{
                _id:mongoose.Types.ObjectId(req.params.idClase)
            }
        },
        {
            $project:{
                "_id":true,
                "instructores.nombre":true,
                "instructores.imagen":true,
                "asignaciones":true
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

// • Agregar un nuevo comentario
router.post('/:idClase/anuncios/:idAnuncio/nuevoComentario', function(req, res){
    clase.update(
        {
            _id: mongoose.Types.ObjectId(req.params.idClase),
            "anuncios._id":mongoose.Types.ObjectId(req.params.idAnuncio)
        },
        {
            $push:{
                "anuncios.$.comentarios":{
                    usuario: req.body.usuario,
                    mensaje: req.body.mensaje,
                    fecha: req.body.fecha,
                    hora: req.body.hora
                }
            }
            
        }
    )
    .then(result=>{
        res.send(result);
        res.end();
    })
    .catch(error=>{
        res.send(error);
        res.end();
    });
    
});
module.exports = router;