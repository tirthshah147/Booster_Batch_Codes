const mongoose = require('mongoose');

//connect your mongoose
mongoose.connect('mongodb://localhost/playground',{useNewUrlParser: true, useUnifiedTopology : true})
.then(() => console.log('Connected'))
.catch((err) => console.log(`Error while connecting, ${err}`));

// SQL : DATABASE -> TABLE -> rows & COLUMNS
// MONGODB : CLUSTER -> COLLECTION -> documents


//step1. Create schema
const courseSchema = mongoose.Schema({
  name:String,
  author:String,
  tags:[String],
  isPublished:Boolean
},{timestamps:true})

//step2. By using schema we will create model
const Course = mongoose.model('Course',courseSchema); //courses

async function createCourse(){
  const course = new Course({
    name:"Node JS",
    author:"Purshottam",
    tags:['Web Development','Software Development'],
    isPublished:false
  })

  const result = await course.save();

  console.log(result);

}

createCourse();



