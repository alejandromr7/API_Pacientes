const Sequelize = require('sequelize');

require('dotenv').config()
// Option 1: Passing parameters separately
const db = new Sequelize(process.env.BD_NOMBRE, process.env.BD_USER, process.env.BD_PASS, {
  host: process.env.BD_HOST || '127.0.0.1',
  dialect: 'mssql',
  operatsAliases:false,

  define: {
      timestamps: false
  }
});


module.exports = db;