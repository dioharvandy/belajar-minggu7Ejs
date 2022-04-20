const sequelize = require("../configs/dbConfig");
const {Sequelize} = require("sequelize");
const Pet = require("./pet");

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

Person.hasMany(Pet,{
    foreignKey: "personId"
})
Pet.belongsTo(Person)

module.exports = Person

