const Joi = require('joi');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
  name:{
    type:String,
    required:true,
    minlength:5,
    maxlength:255
  },
  email:{
    type:String,
    required:true,
    unique:true
  },
  password:{
    type:String,
    required:true,
    minlength:5,
    maxlength:1024
  }
})

userSchema.methods.generateAuthToken = function() {
  const token = jwt.sign({_id:this._id},'Zakirloveskatrinakaif');
  return token;
}


const User = mongoose.model('User',userSchema);

function validateUser(user) {
  const schema = Joi.object({
    name:Joi.string().min(4).max(255).required(),
    email:Joi.string().required().email(),
    password:Joi.string().min(5).max(1024).required()
  })

  return schema.validate(user)
}

module.exports = {
  User,
  validate:validateUser
}

