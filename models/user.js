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
    },
    username:{
        type: Sequelize.STRING
    },
    password:{
        type: Sequelize.STRING
    }
});
        
User.sync({alter: true})
module.exports = User

