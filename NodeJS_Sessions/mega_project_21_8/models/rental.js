const Joi = require('joi');
const mongoose = require('mongoose');
Joi.objectId = require('joi-objectid')(Joi);

const Rental = mongoose.model('Rental',new mongoose.Schema({
  customer:{
    type: new mongoose.Schema({
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
    }),
    required:true
  },
  movie:{
    type:new mongoose.Schema({
      title:{
        type:String,
        required:true,
        minlength:5,
        maxlength:50,
        trim:true
      },
      dailyRentalRate:{
        type:Number,
        required:true,
        min:0,
        max:500
      }
    }),
    required:true
  },
  dateOut:{
    type:Date,
    default:Date.now()
  },
  dateReturn:{
    type:Date
  },
  rentalFee:{
    type:Number,
    min:0
  }
}));

function validateRental(rental) {
  const schema = Joi.object({
    customerId : Joi.objectId().required(),
    movieId: Joi.objectId().required()
  })

  return schema.validate(rental);
}

module.exports = {
  Rental,
  validate:validateRental
}