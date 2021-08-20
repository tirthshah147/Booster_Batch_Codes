const mongoose = require('mongoose');

//connect your mongoose
mongoose.connect('mongodb://localhost/trialDB',{useNewUrlParser: true, useUnifiedTopology : true})
.then(() => console.log('Connected'))
.catch((err) => console.log(`Error while connecting, ${err}`));

//Using Reference

// const Author = mongoose.model('Author',mongoose.Schema({
//   name:String,
//   bio:String,
//   website:String
// }))


// const Course = mongoose.model('Course',mongoose.Schema({
//   name:String,
//   author:{
//     type:mongoose.Schema.Types.ObjectId,
//     ref:'Author'
//   }
// }))


// async function createAuthor(name,bio,website) {
//   const author = new Author({
//     name,
//     bio,
//     website
//   })

//   const result = await author.save();
//   console.log(result);
// }

// async function createCourse(name,author) {
//   const course = new Course({
//     name,
//     author
//   })

//   const result = await course.save();
//   console.log(result);
// }

// async function listCourses() {
//   const courses = await Course
//                         .find()
//                         .populate('author','name website -_id')
//                         // .populate('category')
//                         .select('name author -_id')
//   console.log(courses);
// }

// createAuthor('Arafat','I am Fullstack','www.facebook.com');

// createCourse('React JS','611fdf194a39630488b363d7');

// listCourses();


//Using embedded documents

const authorSchema = mongoose.Schema({
  name:String,
  bio:String,
  website:String
});

const Author = mongoose.model('Author',authorSchema);

const Course = mongoose.model('Course',mongoose.Schema({
  name:String,
  authors:{
    type:[authorSchema],
    required:true
  }
}))

async function createAuthor(name,bio,website) {
  const author = new Author({
    name,
    bio,
    website
  })

  const result = await author.save();
  console.log(result);
}

async function createCourse(name,authors) {
  const course = new Course({
    name,
    authors
  })

  const result = await course.save();
  console.log(result);
}

async function listCourses() {
  const courses = await Course.find(); 
  console.log(courses);
}

async function updateAuthor(courseId) {
  // const course = await Course.findById(courseId);
  // course.author.name = "Arafat Alim";
  // course.save();
  // course.author.save(); no need to do this...

  const course = await Course.update({_id:courseId},{
    $set:{
      'author.name' : "Dhritesh Patel"
    }
  });
}

async function addAuthor(courseId, author) {
  const course = await Course.findById(courseId);
  course.authors.push(author);
  course.save();
}

async function removeAuthor(courseId,authorId) {
  const course = await Course.findById(courseId);
  const author = course.authors.id(authorId);
  author.remove();
  course.save();
}

// createCourse('CSS', [new Author({name:'Tirth Shah'}), new Author({name:'Arafat'})]);
// listCourses();

// updateAuthor('611fe20d944ae1290c27e027');
// addAuthor('611fe43189bc2b26d8702c95',new Author({name:'Shatakshi Gupta'}))
removeAuthor('611fe43189bc2b26d8702c95','611fe5139714d3278c249b64')

