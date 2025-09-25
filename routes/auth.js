const express = require("express");
const { register, login } = require("../controller/authController");

const router = express.Router()

router.post("/register",register);


//(req,res ) =>{
//     res.send("register route")
// });

router.post("/login",login);


module.exports = router;


