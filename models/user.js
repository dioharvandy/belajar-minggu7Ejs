const sequelize = require("../configs/dbConfig");
const {Sequelize} = require("sequelize");

const User = sequelize.define("user",{
    
    id:{
        type: Sequelize.INTEGER,
        primaryKey : true,
        autoIncrement: true
    },
    name:{
        type: Sequelize.STRING
    },
    address:{
        type: Sequelize.STRING
    }
});

User.sync()
module.exports = User

