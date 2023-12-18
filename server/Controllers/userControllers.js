const UserModel = require("../Models/userModels");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

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




exports.verifyLogin_post = async (req, res) => {
  const { email, password } = req.body;

  console.log(`email: ${email}`);

  const userData = await UserModel.findOne({email:email});

  if(userData){

    const passwordMatch = await bcrypt.compare(password,userData.password);


    if(passwordMatch){
        console.log('good');
    }else{
        console.log('sorry');
    }

  }

  
};
