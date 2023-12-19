const UserModel = require("../Models/userModels");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {body,validationResult} = require('express-validator');




const maxAge = 3 * 24 * 60 * 60 ;
const createToken = (id) => {
    return jwt.sign({ id }, 'secretkey',{
        expiresIn: maxAge
    })
}

exports.signUp = async (req, res) => {
  const { fname, lname, email, password, phone } = req.body;



  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new UserModel({
      fname,
      lname,
      email,
      hashedPassword,
      phone,
    });

    await newUser.save();

    console.log("New user registered:", newUser);

    res.json({ message: "Registration successful", user: newUser });
  } catch (error) {
    console.error("Error while Registration:", error.message);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};




// exports.verifyLogin_post = async (req, res) => {
//   const { email, password } = req.body;

  
// try{


//   const userData = await UserModel.findOne({email:email});

//   if(userData){

//     const passwordMatch = await bcrypt.compare(password,userData.hashedPassword);

//     if(passwordMatch){
//       const token = createToken(userData._id);
//         res.cookie('jwt', token,{ httpOnly: true, maxAge: maxAge * 1000 });
//            res.json({ success: true, message: 'Login successful' });
//         console.log('good');
//     }else{
//         console.log('sorry');
//         res.status(401).json({ success: false, message: 'Invalid credentials' });
//     }

//   }else{
//     res.status(404).json({ success: false, message: 'User not found' });
//     console.log('somthing went wrong');
//   }

// } catch (error) {
//         console.error("Error during login:", error.message);
//         res.status(500).json({ success: false, message: "Internal Server Error" });
//     }

  
// };


exports.verifyLogin_post = async (req, res) => {
  const { email, password } = req.body;

  try {
      const userData = await UserModel.findOne({ email: email });

      if (userData) {
          const passwordMatch = await bcrypt.compare(password, userData.hashedPassword);

          if (passwordMatch) {
              const token = createToken(userData._id);
              res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000, path: '/', domain: 'yourdomain.com' });
              res.json({ success: true, message: 'Login successful' });
              console.log('good');
          } else {
              res.status(401).json({ success: false, message: 'Invalid credentials' });
              console.log('not good');
          }
      } else {
          res.status(404).json({ success: false, message: 'User not found' });
      }
  } catch (error) {
      console.error("Error during login:", error.message);
      res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};
