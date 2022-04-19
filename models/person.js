const sequelize = require("../configs/dbConfig");
const {Sequelize} = require("sequelize");


const Person = sequelize.define("person",{
    
    id:{
        type: Sequelize.INTEGER,
        primaryKey : true,
        autoIncrement: true
    },
    first_name:{
        type: Sequelize.STRING
    },
    last_name:{
        type: Sequelize.STRING
    },
    age:{
        type: Sequelize.INTEGER
    }
});

Person.sync({alter : true})
module.exports = Person

