const startupDebugger = require('debug')('app:startup');
const dbDebugger = require('debug')('app:db');
const Joi = require('joi');
const morgan = require('morgan');
const logger = require('./logger');
const express = require('express');
const { array } = require('joi');
const helmet = require('helmet');
const coursesRoute = require('./routes/courses');

const app = express();

app.set('view engine','pug');
app.set('views','./views');

//common template engines!

//pug
//mustache
//EJS

app.use(express.json());        
app.use(express.urlencoded({extended : true}));
app.use(express.static('public'));
app.use(helmet());
// key1=value1&key2=value2 -> req.body = {key1 : value1, key2:value2}
app.use(logger);
// app.use(morgan('tiny'));

console.log(`NODE_ENV: ${process.env.NODE_ENV}`);
console.log(`app: ${app.get('env')}`);

if (app.get('env') === 'development') {
  app.use(morgan('tiny'));
  startupDebugger('Morgan is enabled....');
  startupDebugger('Debugging startup code');
}

dbDebugger('Debugging my database');
//routes
app.use('/api/courses',coursesRoute);

app.use(function(req,res,next){
  console.log("Authenticating.....");
  next();
})

app.get('/',(req,res) => {
  return res.render('index',{title:'My express App', message:"Hello Vikash!"});
});


// app.post('/api/trial/courses',(req,res) =>{
//   console.log(req.body);
//   res.send("Hulalalalala");
// })

// app.get('/api/courses',(req,res) => {
//   return res.send(courses);
//   // console.log(courses);
//   // next();
// });

// // app.use(function(req,res,next){
// //   console.log("Time passsss.s.....");
// //   return res.send("Hiii");
// // })

// app.get('/api/courses/:id',(req,res) => {
//   const course =courses.find(c => c.id === parseInt(req.params.id));
//   if (!course) return res.status(404).send('The course with given ID is not found...')
//   res.send(course);
// });


// app.post('/api/courses',(req,res) => {
//   // if (!req.body.name || req.body.name.length < 3) {
//   //   res.status(404).send("Name is required and should be minimum 3 words");
//   //   return;
//   // }

//   // const schema = Joi.object({
//   //   name:Joi.string().min(3).required()
//   // })

//   // const result = schema.validate(req.body);
//   // console.log(result);

//   // const result = validateCourse(req.body);
//   const {error} = validateCourse(req.body);

//   if (error) {
//     res.status(400).send(error.details[0].message);
//     return;
//   }

//   const course = {
//     id: courses.length+1,
//     name: req.body.name
//   }
//   courses.push(course);
//   res.send(course);
// });

// app.put('/api/courses/:id',(req,res) => {
//   //Look up for the course
//   const course =courses.find(c => c.id === parseInt(req.params.id));
//   //If not existing, return 404
//   if (!course) return res.status(404).send('The course with given ID is not found...')

//   //Validate
//   const {error} = validateCourse(req.body);
//   // const schema = Joi.object({
//   //   name:Joi.string().min(3).required()
//   // })
//   // const result = schema.validate(req.body);
//   //If Invalid, return 400 - Bad request
//   if (error) {
//     res.status(400).send(error.details[0].message);
//     return;
//   }

//   //Update the course
//   course.name = req.body.name;
//   //Return response with updated course
//   res.send(course);
// })

// app.delete('/api/courses/:id',(req,res) => {
//   //Look up for the course
//   const course =courses.find(c => c.id === parseInt(req.params.id));
//   //not existing, return 404
//   if (!course) return res.status(404).send('The course with given ID is not found...')

//   //Delete
//   const index = courses.indexOf(course);
//   courses.splice(index,1);
//   //rerturn the deleted/same course
//   res.send(course);
// })

// function validateCourse(course) {
//   const schema = Joi.object({
//     name:Joi.string().min(3).required()
//   })

//   return schema.validate(course);
// }


const port = process.env.PORT || 8080;
// const port = 8080;
app.listen(port,() => console.log(`Listening on port ${port}...`));


