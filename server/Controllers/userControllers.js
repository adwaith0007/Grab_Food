const UserModel = require("../Models/userModels");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const {body,validationResult} = require('express-validator');
const { CreateToken } = require("../jwt/createToken");



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
              res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
              // document.cookie('hi')
              res.json({ success: true, message: 'Login successful' });
              console.log(token);
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



exports.login = async (req, res) => {
  const { email, password } = req.body;

  

  //check if the input field is empty
  if (!email || !password) {
    return res.json({ message: "enter username and password" });
  }

  //get user
  const user = await UserModel.findOne(
    { email: email },
    { _id: 1, hashedPassword: 1, isBlocked: 1 }
  );

  //check user
  if (!user) res.json({ success: false, message: "user not found" });

  //check whether blocked
  if (user.isBlocked)
    return res.json({ success: false, message: "user is blocked" });

    console.log(user);

  try {
    if (await bcrypt.compare(password, user.hashedPassword)) {
      //generate token
      const token = CreateToken(user._id.toString());
      res
        .status(200)
        .cookie("token", token, {
          expires: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000),
          httpOnly: true,
        })
        .json({ success: true, message: "login successful", token: token });
    } else return res.json({ success: false, message: "login failed" });
  } catch (error) {
    console.log("error with bcrypt compare");
  }
};