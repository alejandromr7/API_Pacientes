const Sequelize = require('sequelize');
require('dotenv').config()

// Option 1: Passing parameters separately
const db = new Sequelize(process.env.BD_NOMBRE || 'nodejs', process.env.BD_USER || 'alex', process.env.BD_PASS || 'ok', {
  host: process.env.BD_HOST || '127.0.0.1',
  dialect: 'mysql',
  port: process.env.BD_PORT || 3306, 
  operatsAliases:false,

  define: {
      timestamps: false
  }
});


module.exports = db;