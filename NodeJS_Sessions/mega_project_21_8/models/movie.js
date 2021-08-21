const Joi = require('joi');
const mongoose = require('mongoose');
const {genreSchema} = require('./genre');


const Movie = mongoose.model('Movies',new mongoose.Schema({
  title:{
    type:String,
    required:true,
    minlength:5,
    maxlength:50,
    trim:true
  },
  genre:{
    type:genreSchema,
    required:true
  },
  numberInStock:{
    type:Number,
    required:true,
    min:0,
    max:255
  },
  dailyRentalRate:{
    type:Number,
    required:true,
    min:0,
    max:500
  }
}))


function validateMovie(movie) {
  const schema = Joi.object({
    title:Joi.string().min(5).max(50).required(),
    genreId:Joi.string().required(),
    numberInStock:Joi.number().min(0).max(255).required(),
    dailyRentalRate:Joi.number().min(0).max(500).required()
  })

  return schema.validate(movie);
}

module.exports = {
  Movie,
  validate:validateMovie
}