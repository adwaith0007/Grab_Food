const express = require('express');
const mongoose = require ("mongoose");
const app = express();
const port = 5000 

app.get('/',(req,res)=>{
    res.send('Hello World')
})

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