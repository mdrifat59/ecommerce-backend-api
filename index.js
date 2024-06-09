require('dotenv').config()
const express = require('express')
const app = express()
// const mongoose = require('mongoose'); 
const dbConnection= require("./config/dbConfig")

app.use(express.json())

 dbConnection()
 
//  console.log(process.env.USER_NAME);

app.listen(3000)