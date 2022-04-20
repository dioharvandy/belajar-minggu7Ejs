const sequelize = require("../configs/dbConfig");
const {Sequelize} = require("sequelize");
//const Person = require("./person");

const Pet = sequelize.define("pet",{
    
    id:{
        type: Sequelize.INTEGER,
        primaryKey : true,
        autoIncrement: true
    },
    name:{
        type: Sequelize.STRING
    },
    type:{
        type: Sequelize.STRING
    },
    personId:{
        type: Sequelize.INTEGER
    }
});


Pet.sync()

module.exports = Pet

