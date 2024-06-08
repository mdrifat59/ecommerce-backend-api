const express = require('express')
const app = express()
const mongoose = require('mongoose'); 

app.use(express.json())
mongoose.connect('mongodb+srv://mdrifatulislam59:ON86VIVvkh1oAjSF@cluster0.2ckl6wm.mongodb.net/ecommerce?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log('Database Connected!'));
 
 

app.listen(3000)