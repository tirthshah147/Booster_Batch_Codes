const Joi = require('joi');
const express = require('express');
const { array } = require('joi');
const app = express();

app.use(express.json());



const courses = [
  {id:1,name:"React JS"},
  {id:2,name:"Node JS"},
  {id:3,name:"JS"},
  {id:4,name:"Vue JS"},
];

app.get('/api/courses',(req,res) => {
  return res.send(courses);
});

app.get('/api/courses/:id',(req,res) => {
  const course =courses.find(c => c.id === parseInt(req.params.id));
  if (!course) return res.status(404).send('The course with given ID is not found...')
  res.send(course);
});


app.post('/api/courses',(req,res) => {
  // if (!req.body.name || req.body.name.length < 3) {
  //   res.status(404).send("Name is required and should be minimum 3 words");
  //   return;
  // }

  const schema = Joi.object({
    name:Joi.string().min(3).required()
  })

  const result = schema.validate(req.body);
  console.log(result);

  if (result.error) {
    res.status(400).send(result.error.details[0].message);
  }

  const course = {
    id: courses.length+1,
    name: req.body.name
  }
  courses.push(course);
  res.send(course);
});

app.put('/api/courses/:id',(req,res) => {
  //Look up for the course
  const course =courses.find(c => c.id === parseInt(req.params.id));
  //If not existing, return 404
  if (!course) return res.status(404).send('The course with given ID is not found...')

  //Validate
  const schema = Joi.object({
    name:Joi.string().min(3).required()
  })
  const result = schema.validate(req.body);
  //If Invalid, return 400 - Bad request
  if (result.error) {
    res.status(400).send(result.error.details[0].message);
  }

  //Update the course
  course.name = req.body.name;
  //Return response with updated course
  res.send(course);
})


const port = process.env.PORT || 8080;
// const port = 8080;
app.listen(port,() => console.log(`Listening on port ${port}...`));

