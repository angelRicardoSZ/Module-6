const express = require('express');
const router = express.Router();
const peliculasController = require('../controllers/peliculasController');


// Creación
router.get('/crear', peliculasController.crear);

router.post('/crear', peliculasController.guardado);


// Lectura

router.get("/", peliculasController.listado);


// detalle
router.get("/:id", peliculasController.detalle)



// editar
router.get("/editar/:id", peliculasController.editar);
router.post("/editar/:id", peliculasController.actualizar);


// Borrado

router.post("/borrar/:id", peliculasController.borrar);





module.exports = router;