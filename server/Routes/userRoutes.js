
const express = require("express");
const router = express.Router();
const userController = require("../Controllers/userControllers");




router.post('/register',(req,res)=>{
    userController.signUp(req, res);
})

router.post('/login',(req,res)=>{
    userController.verifyLogin_post(req, res);
})

// router.post('/register',(req,res)=>{
//     console.log(req.body);
//     console.log("user");
// })

router.get('/',(req,res)=>{
    res.send("Hello World")
})


module.exports = router;