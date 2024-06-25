const express = require("express")
const _ = express.Router() 
 const registrationController = require ("../../Controllers/registrationController")


// _.get("/registration", function(req, res){
//     res.send("done")
// })


_.post("/registration", registrationController)

// if(email){
//    if(!emailValidation(email)){
//        return res.send("Valied Email Required")
//        }            
//    } 
//     if(password){
//        if(!passwordValidation(password)){
//             return res.send("Minimum eight characters, at least one letter and one number") 
//            }
//    } 

module.exports = _ ;