const express = require('express');

// Instanciando un router
const router = express.Router();

// Importar controladores
const usuario_controller = require("../controllers/usuarios.controller");

// Definición de los endpoints - rutas

const version = "/api/v1"

router.get(version + "/usuarios", usuario_controller.consultarUsuarios);
router.get(version + "/usuarios/:id/documentos/:id_documento?", usuario_controller.consultarUsuario);
router.post(version + "/usuarios", usuario_controller.crearUsuario);
router.put(version + "/usuarios", usuario_controller.modificarUsuario);
router.delete(version + "/usuarios", usuario_controller.eliminarUsuario);


module.exports = router