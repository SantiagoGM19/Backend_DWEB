// Importar los servicios
const run = require('../services/mongodb.service');

// Controlador de usuarios

/**
 * 
 * @param {Request} req 
 * @param {Response} res 
 */
const crearUsuario = (req, res) => {

}

/**
 * 
 * @param {Request} req 
 * @param {Response} res 
 */
const modificarUsuario = (req, res) => {
    res.send("Modificar usuario")
};

/**
 * 
 * @param {Request} req 
 * @param {Response} res 
 */
const eliminarUsuario = (req, res) => {
    res.send("Eliminar usuario");
};

/**
 * 
 * @param {Request} req 
 * @param {Response} res 
 */
const consultarUsuario = (req, res) => {
    let id = req.params.id
    res.send("consultar usuario" + id + JSON.stringify(req.params))
};

/**
 * 
 * @param {Request} req 
 * @param {Response} res 
 */
const consultarUsuarios = (req, res) => {
    let respuesta = {};
    try{
        respuesta.ok = true;
        respuesta.message = "Usuarios consultados correctamente";
        // Consulta a la base de datos de usuarios
        run().catch(console.dir);
        respuesta.info = [{nombre: " Juan " }];
        res.send(respuesta);
    }catch (error){
        respuesta.ok = false;
        respuesta.message = "Ha ocurrido un error consultando los usuarios";
        respuesta.info = error;
        res.status(500).send(respuesta);
    }
    res.send("Consultar usuario");
};

module.exports = {
    crearUsuario,
    modificarUsuario,
    eliminarUsuario,
    consultarUsuario,
    consultarUsuarios
}