
const express = require("express");
const router = express.Router();
const userController = require("../Controllers/userControllers");
// const { check, validationResult } = require('express-validator');



router.post('/register', 
// [body('email').isEmail()],
(req,res)=>{
    userController.signUp(req, res);
   
    // res.send("Hello World")
    // const errors= validationResult(req);
    // if(!errors.isEmpty()){
    //     return res.status(400).json({errors:errors.array()})
    // }
})

// router.post('/login',(req,res)=>{
//     userController.verifyLogin_post(req, res);
// })

router.post("/login", (req, res) => {
    userController.login(req, res);
  });

// router.post('/register',(req,res)=>{
//     console.log(req.body);
//     console.log("user");
// })

router.get('/hi',(req,res)=>{
    res.send("Hello World")

    res.cookie('foo','bar')
    
})


module.exports = router;