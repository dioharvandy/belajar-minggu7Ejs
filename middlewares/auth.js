const jsonwebtoken = require("jsonwebtoken");
const User = require("../models/user");


const authenticate = async(req, res, next)=>{
    try {

        if(!req.headers.access_token){
            return res.status(400).json({
                message: "U Have No Access Token !!"
            }) 
        }

        let decoded = jsonwebtoken.verify(req.headers.access_token, "inisecretkey")
        
        let result = await User.findOne({
            where:{
                username: decoded.username
            }
        })

        if(result){
            req.user = result
            next()
        }else{
            return res.status(400).json({
                message: "Wrong Password or Username !!"
            })
        }
    } catch (error) {
        return res.status(500).json({
            message: error
        })
    }
}

module.exports = {
    authenticate
}