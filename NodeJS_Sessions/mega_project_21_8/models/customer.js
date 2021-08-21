const Joi = require('joi');
const mongoose = require('mongoose');

const Customer = mongoose.model('Customer', new mongoose.Schema({
  name:{
    type:String,
    required:true,
    minlength:5,
    maxlength:50
  },
  isGold:{
    type:Boolean,
    default:false
  },
  phone:{
    type:String,
    minlength:10,
    maxlength:12,
    required:true
  }
  // status:{
  //   type:String,
  //   required:true,
  // }
  // //35 properties
}))

function validateCustomer(customer){
  const schema = Joi.object({
    name:Joi.string().min(5).max(50).required(),
    phone:Joi.string().min(10).max(12).required(),
    isGold:Joi.boolean()
  })

  return schema.validate(customer);
}

module.exports = {
  Customer,
  validate:validateCustomer
}