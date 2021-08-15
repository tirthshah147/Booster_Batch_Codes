const express = require('express');
const router = express.Router();

const courses = [
  {id:1,name:"React JS"},
  {id:2,name:"Node JS"},
  {id:3,name:"JS"},
  {id:4,name:"Vue JS"},
];

// localhost:8080/api/courses/tirth/weds/pata/nahi  - POST 

router.post('/trial',(req,res) =>{
  console.log(req.body);
  res.send("Hulalalalala");
})

router.get('/',(req,res) => {
  return res.send(courses);
});


router.get('/:id([0-9]{6})',(req,res) => {
  const course =courses.find(c => c.id === parseInt(req.params.id));
  if (!course) return res.status(404).send('The course with given ID is not found...')
  res.send(course);
});

router.get('*',(req,res) => {
  res.send('API doent exists');
})


router.post('/',(req,res) => {
  const {error} = validateCourse(req.body);

  if (error) {
    res.status(400).send(error.details[0].message);
    return;
  }

  const course = {
    id: courses.length+1,
    name: req.body.name
  }
  courses.push(course);
  res.send(course);
});

router.put('/:id',(req,res) => {
  
  const course =courses.find(c => c.id === parseInt(req.params.id));

  if (!course) return res.status(404).send('The course with given ID is not found...')


  const {error} = validateCourse(req.body);
 
  if (error) {
    res.status(400).send(error.details[0].message);
    return;
  }


  course.name = req.body.name;

  res.send(course);
})

router.delete('/:id',(req,res) => {

  const course =courses.find(c => c.id === parseInt(req.params.id));

  if (!course) return res.status(404).send('The course with given ID is not found...')


  const index = courses.indexOf(course);
  courses.splice(index,1);

  res.send(course);
})

function validateCourse(course) {
  const schema = Joi.object({
    name:Joi.string().min(3).required()
  })

  return schema.validate(course);
}

module.exports = router;