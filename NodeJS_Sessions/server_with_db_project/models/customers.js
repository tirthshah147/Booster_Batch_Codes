const Joi = require('joi');
const mongoose = require('mongoose');

const customerSchema = mongoose.Schema({
  name:{
    type:String,
    required:true,
    minlength:5,
    maxlength:50
  },
  phone:{
    type:String,
    required:true,
    minlength:10,
    maxlength:12
  },
  isGold:{
    type:Boolean,
    default:false
  }
})

const Customer = mongoose.model('Customer',customerSchema);

function validateCustomer(customer) {
  const schema = Joi.object({
    name:Joi.string().min(5).max(50).required(),
    phone:Joi.string().min(10).max(12).required(),
    isGold:Joi.boolean()
  })

  return schema.validate(customer);
}

module.exports = {
  validateCustomer : validateCustomer,
  Customer
}