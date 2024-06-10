const express = require("express")
const _ = express.Router()
 const emailValidation = require("../../helpers/emailValidation")
_.get("/registration", function(req, res){
    res.send("done")
})
_.post("/registration", function(req, res){
    let {name,email,password} = req.body
     if(!name){
        res.send("Name required")
     }else if(!email){
        res.send("Email required")
     }else if (!password){
        res.send("Password required")
     }else{
        if(email){
            console.log(emailValidation(email));
            if(!emailValidation(email)){
                return res.send("Valied Email Required")
            }
        }
        res.send("Done")
     }
})

module.exports = _ 