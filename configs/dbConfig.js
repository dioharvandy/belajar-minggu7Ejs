const { Sequelize } = require("sequelize");

const dbName = 'belajar_sequelize'
const userName = 'root'
const password = 'root'
const sequelize = new Sequelize(dbName, userName, password,{
    host : 'localhost',
    dialect : 'mysql'
})

module.exports = sequelize