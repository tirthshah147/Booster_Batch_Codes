const Joi = require('joi');
const mongoose = require('mongoose');

const courseSchema = mongoose.Schema({
  name:{
    type:String,
    required:true,
    minlength:3,
    maxlength:50
  }
},{timestamps:true})

const Course = mongoose.model('Course',courseSchema);

function validateCourse(course) {
  const schema = Joi.object({
    name:Joi.string().min(3).required()
  })

  return schema.validate(course);
}

module.exports = {
  validate : validateCourse,
  Course
}


