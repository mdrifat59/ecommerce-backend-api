const User = require ("../model/userSchema")
const bcrypt = require('bcrypt');
const nodemailer = require("nodemailer");
let registrationController = async (req, res)=>{
    let {name,email,password} = req.body
    let existingUser = await User.find({email:email}) 
    if(existingUser.length == 0){
        if(!name){
            res.send("Name required")
         }else if(!email){
            res.send("Email required")
         }else if (!password){
            res.send("Password required")
         }else{ 
                bcrypt.hash(password, 10, async function(err, hash) {
                    let user = new User({
                        name: name,
                        email: email,
                        password: hash,
                    })
            
                    user.save()

                    const transporter = nodemailer.createTransport({
                        service:"gmail",
                        auth: {
                          user: "mdrifatulislam59@gmail.com",
                          pass: "dkay yvdn bgmj fuwi",
                        },
                      });

                      const info = await transporter.sendMail({
                        from: 'mdrifatulislam59@gmail.com', // sender address
                        to: "tapsinakter2012@gamil.com", // list of receivers
                        subject: "Varify Your Email", // Subject line 
                        html: "<b>Hello world?</b>", // html body
                      });
                    
                    res.send(user)
                }); 
           
         }
    }else{
        res.send("Email already exits")
    }
   
}


module.exports = registrationController