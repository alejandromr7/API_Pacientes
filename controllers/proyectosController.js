const {Pacientes} = require('../models/Proyectos');


exports.nuevoCliente = async (req, res, next) =>{

    const { nombre, propietario, fecha, telefono, hora, sintomas } = req.body

    try {
        await Pacientes.create({ nombre, propietario, fecha, telefono, hora, sintomas });
        res.json({
            msg: 'Se agrego correctamente',
            nombre
        });

    } catch (error) {
        console.log(error);
        next();
    }

    
    next();
}


exports.obtenerPacientes = async (req, res, next) =>{

    try {
        let usuarios = await Pacientes.findAll({
            // Ordenando descendentemente || mayor a menor
            order:[
                ['id','DESC']
            ]
        });
        
        res.json(
            usuarios
        )
    } catch (error) {
        console.log(error)
    }

    next();
}


exports.obtenerPaciente = async (req, res, next) =>{

    try {
        let pacienteId = await Pacientes.findOne({
            where: {
              id : req.params.id
            }
          });

          res.json(pacienteId)

    } catch (error) {
        console.log(error)
    }

    next();
}

exports.actualizarPaciente = async (req, res, next) =>{

    const { nombre, propietario, fecha, hora, telefono, sintomas } = req.body

    try {

        const paciente = await Pacientes.update({ nombre, propietario, fecha, telefono, hora, sintomas }, {
                where: {
                    id : req.params.id
                }
          });

          res.json({
              msg : 'Se actualizo correctamente'
          })

        
    } catch (error) {
        console.log(error);
        next();
    }
}


exports.eliminarPaciente = async (req, res, next) =>{

    try {

        const paciente = await Pacientes.destroy({
                where: {
                    id : req.params.id
                }
          });

          res.json({
              msg : 'Se elimino correctamente',
              paciente
          })

        
    } catch (error) {
        console.log(error);
        next();
    }
}