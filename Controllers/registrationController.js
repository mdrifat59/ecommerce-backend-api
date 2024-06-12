const User = require ("../model/userSchema")

let registrationController = (req, res)=>{
    let {name,email,password} = req.body
    if(!name){
        res.send("Name required")
     }else if(!email){
        res.send("Email required")
     }else if (!password){
        res.send("Password required")
     }else{
        let user = new User({
            name: name,
            email: email,
            password: password,
        })

        user.save()
        
        res.send({
         name:user.name,
         email:user.email,
         password:user.password
        })
     }
}


module.exports = registrationController