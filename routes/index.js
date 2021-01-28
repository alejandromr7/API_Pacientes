const express = require('express');
const router = express.Router();

// importar el controlador
const proyectosController = require('../controllers/proyectosController')


module.exports = () => {

    // Agrega nuevos pacientes
    router.post('/pacientes', proyectosController.nuevoCliente);

    // Obteniendo todos los registros en la bd
    router.get('/', proyectosController.obtenerPacientes);

    // Obtiene un paciente en especifico
    router.get('/pacientes/:id', proyectosController.obtenerPaciente);

    // Elimina un paciente en especifico
    router.delete('/pacientes/:id', proyectosController.eliminarPaciente);

    // Actualizar un paciente en especifico
    router.patch('/pacientes/:id', proyectosController.actualizarPaciente);


    return router;
}

