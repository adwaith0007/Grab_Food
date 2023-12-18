const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  fname: {
    type: String,
    required: true,
  },
  lname: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    lowercase: true
  },
  phone: {
    type: Number,
  },
  addresses: {
    address1: {
      type: String,
    },
    address2: {
      type: String,
    },
    city: {
      type: String,
    },
    state: {
      type: String,
    },
    pincode: {
      type: Number,
    },
  },
  hashedPassword: {
    type: String,
  },
  isBlocked: {
    type: Boolean,
    default: false,
  },
});

const UserModel = mongoose.model("users", UserSchema);

module.exports = UserModel;