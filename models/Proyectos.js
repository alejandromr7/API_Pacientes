const Sequelize = require('sequelize');
const db = require('../config/db');

const Pacientes = db.define('Paciente', {
    id : {
        type : Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    nombre : Sequelize.STRING,

    propietario : Sequelize.STRING,

    fecha : Sequelize.STRING,

    telefono : Sequelize.STRING,

    hora : Sequelize.STRING,

    sintomas : Sequelize.STRING,


});


module.exports = {
    Pacientes
}