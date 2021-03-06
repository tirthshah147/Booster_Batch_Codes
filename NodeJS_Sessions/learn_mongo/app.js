const mongoose = require('mongoose');

//connect your mongoose
mongoose.connect('mongodb://localhost/playground',{useNewUrlParser: true, useUnifiedTopology : true})
.then(() => console.log('Connected'))
.catch((err) => console.log(`Error while connecting, ${err}`));

// SQL : DATABASE -> TABLE -> rows & COLUMNS
// MONGODB : CLUSTER -> COLLECTION -> documents


//step1. Create schema
// const courseSchema = mongoose.Schema({
//   name:String,
//   author:String,
//   tags:[String],
//   price:Number,
//   isPublished:Boolean
// },{timestamps:true})

//Validators

const courseSchema = mongoose.Schema({
  name:{
    type:String, 
    required:true,
    minlength:3,
    maxlength:255,
    // match:/pattern/
  },
  category:{
    type:String,
    required:true,
    enum:['web','mobile','machine learning'],
    lowercase:true,
    trim:true
  },
  author:String,
  tags:{
    type:[String],
    validate:{
      validator:function(v){
        return v && v.length > 0;
      },
      message: 'A course should have atleast one tag!'
    }
  },
  date:{type:Date, default:Date.now},
  price:{
    type:Number,
    required: function(){return this.isPublished},
    min:100,
    max:3000,
    get : v => Math.round(v),
    set : v => Math.round(v)
  },
  isPublished:Boolean
},{timestamps:true})

//step2. By using schema we will create model
const Course = mongoose.model('Course',courseSchema); //courses

async function createCourse(){
  const course = new Course({
    name:"Styled Component",
    category:"WEB",
    author:"Shatakshi Gupta",
    tags:['Frontend'],
    price:200.8,
    isPublished:true
  })

  try {
    const result = await course.save();
    console.log(result);
  } catch (error) {
    // console.log(error.errors);
    for (key in error.errors) {
      console.log(error.errors[key].message)
    }
  }
}

// createCourse();

//COMPARISON QUERY OPERATORS
//eq
//ne
//gt
//gte
//lt
//lte
//in
//nin

//or 
//and

async function getCourses(){
  const pageNumber = 2;
  const pageSize =2;
  const courses = await Course
                        // .find({author:"Shatakshi",isPublished:false})
                        // .find({price:{$gte : 500, $lte : 2000}})
                        // .find({price:{$in : [500,10,10000]}})
                        .find({_id:'611e8bc8035aaa297ced93fb'})
                        // .skip((pageNumber - 1) * pageSize)
                        //Start with Tirth
                        // .find({author:/^Tirth/i})

                        //Ends with Tirth
                        // .find({author:/Shah$/i})

                        //Contains ir
                        // .find({author:/.*ir.*/i})

                        // .or([{author:"Shatakshi Shah"},{price:10000}])
                        // .and()
                        // .limit(pageSize)
                        // .sort({name:1})
                        // .count()
                        // .select({name:1,tags:1,author:1,price:1})
  console.log(courses[0].price);
}

getCourses();

async function updateCourse(id){
  //Approach: Query First
  //findbyId()
  //Modify its properties
  //Save

  // const course = await Course.findById(id);
  // if(!course) return;
  // course.isPublished = true;
  // course.author = "Zakir Sams";
  // course.save();

  //Approach: Update First
  //Update directly
  //Optionally you can get the updated document

  const course = await Course.findByIdAndUpdate(id,{
    $set:{
      author:"Dhritesh",
      isPublished:true
    }
  },{new:true})

  if(!course) return;

  console.log(course);
}

// updateCourse('611d36c548add84d68bfe7ca');

async function removeCourse(id){
  const result = await Course.findByIdAndRemove(id);
  console.log(result);
}

// removeCourse('611d36eb58a37b2da0536fcd');

// Schema Types

// String
// Number
// Date
// Buffer
// Boolean
// ObjectID
// Array




