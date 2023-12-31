const express = require('express');
const mongoose = require ("mongoose");
const bodyParser = require('body-parser');
const cookieParser = require("cookie-parser");
// const { check ,validationResult } = require('express-validator')
const { body, validationResult } = require('express-validator');
const cors = require("cors");
const userRouter = require("./Routes/UserRoutes.js")
const adminRouter = require("./Routes/AdminRoutes.js")

require("dotenv").config();

const app = express();
const port = 5000 


app.use(cookieParser());
app.use(bodyParser.json());

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
    optionsSuccessStatus: 200,
  })
  
);


app.use("/",userRouter)



app.listen(port,()=>{
    console.log(`Express app listening on port ${port}`)
})

mongoose.connect("mongodb://127.0.0.1:27017/grabfoodmern")
.then(() => {
    console.log("Db connection established");
  })
  .catch((err) => {
    console.log("connection error: " + err);
  });





  // app.post('/register', (req, res) => {

  //   console.log(req.body)

  // })









const registeredUsers = []; // This array will store registered user data

app.post('/register', (req, res) => {
  const { fname, email, password ,phone  } = req.body;
 

  // Process registration data (e.g., store in an array, save to a database, etc.)
  const newUser = {
    fname,
    email,
    password,
    phone // Note: You should never store passwords in plaintext. This is just for demonstration purposes.
  };

  registeredUsers.push(newUser);

  console.log('New user registered:', newUser);

  res.json({ message: 'Registration successful', user: newUser });
});

// Endpoint to retrieve and display registered users (for demonstration purposes)
app.get('/register', (req, res) => {
  res.json({ users: registeredUsers });
  
});






// app.get('/',(req,res)=>{
//     // res.send('Hello World')
//     res.send(process.env.SECRET_KEY);
// })







