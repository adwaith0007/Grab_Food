const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports.CreateToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.SECRET_KEY, {
    expiresIn: "1h",
  });
};