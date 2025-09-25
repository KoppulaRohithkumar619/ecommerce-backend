const User = require("../Model/user")
const bcrypt = require("bcrypt")

const register = async(req, res) =>{
    const{name, email,password} = req.body
    // console.log(name);
    if(!name) {
        return res.status(400).json({message : "name not found", })
    }
     if(!email || !email.includes("@")) {
        return res.status(400).json({message : "email not vaild", })
    }

    try{
        const user = await User.find({email : email})
        if(user.length){
            return res.status(404).json({message : "email is already exist"})
        }


    }catch(error){
        res.status(500).json({message: "error"})


    }

    const salt = await bcrypt.genSaltSync(10)
    const hashedPassword = await bcrypt.hashSync(password,salt)


    const newUser = await User.create({
        name,
        email,
        password :hashedPassword
    })
 
    res.status(200).json({message : "user registered"})
}

const login = async(req, res) =>{
    const{email,password} = req.body
    // console.log(name);
    if(!email) {
        return res.status(400).json({message : "name not found", })
    }
     if(!password) {
        return res.status(400).json({message : "password not found", })
    }

    try{
        var user = await User.find({email : email})
        if(user.length == 0){
            return res.status(404).json({message : "email not exist"})
        }
    }catch(error){
        res.status(500).json({message: "error"})
    }

    const passwordcheck = await bcrypt.compare(password,user[0].password)
    console.log(passwordcheck);
    if(passwordcheck == 0){
        return res.status(400).json({message : "password is incorrect"})
        
        
    }

    return res.status(200).json({message : "login successful"})
}





module.exports = {
    register,
    login
}