const express = require('express');
const router = express.Router();
const {validate,Course} = require('../models/courses');

router.get('/',async (req,res) => {
  const courses = await Course.find().sort({name:1});
  return res.send(courses);
});


router.get('/:id',async (req,res) => {
  const course = await Course.find({_id:req.params.id});
  if (!course) return res.status(404).send('The course with given ID is not found...')
  res.send(course);
});

router.get('*',(req,res) => {
  res.send('API doent exists');
})

router.post('/',async (req,res) => {
  const {error} = validate(req.body);

  if (error) {
    res.status(400).send(error.details[0].message);
    return;
  }
  
  let course = new Course({
    name:req.body.name
  })

  course = await course.save();
  res.send(course);
});

// router.put('/:id',(req,res) => {
  
//   const course =courses.find(c => c.id === parseInt(req.params.id));

//   if (!course) return res.status(404).send('The course with given ID is not found...')


//   const {error} = validateCourse(req.body);
 
//   if (error) {
//     res.status(400).send(error.details[0].message);
//     return;
//   }


//   course.name = req.body.name;

//   res.send(course);
// })

// router.delete('/:id',(req,res) => {

//   const course =courses.find(c => c.id === parseInt(req.params.id));

//   if (!course) return res.status(404).send('The course with given ID is not found...')


//   const index = courses.indexOf(course);
//   courses.splice(index,1);

//   res.send(course);
// })


module.exports = router;