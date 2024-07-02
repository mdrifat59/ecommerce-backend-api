const express = require("express")
const _ = express.Router() 
 const registrationController = require ("../../Controllers/registrationController")
const otpController = require("../../Controllers/otpController")
 

_.post("/registration", registrationController)
_.post("/otpverify", otpController)

 

module.exports = _ ;