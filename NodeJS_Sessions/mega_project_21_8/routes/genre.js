const {Genre,validate} = require('../models/genre');
const auth = require('../middlewares/auth');
const admin = require('../middlewares/admin');
const mongoose = require('mongoose');
const express = require('express');
const { User } = require('../models/user');
const router = express.Router();

// function asyncMiddlewareForErrors(handler) {
//   return async (req,res,next) => {
//     try{
//       await handler(req,res);
//     }catch(err){
//       next(err);
//     }
//   }
// }


// router.get('/',asyncMiddlewareForErrors(async(req,res) => {
//     const genres = await Genre.find().sort('name');
//     res.send(genres);
//   // try{
//   //   const genres = await Genre.find().sort('name');
//   //   res.send(genres);
//   // }catch(err){
//   //   // res.status(500).send('Something is failed!');
//   //   next(err);
//   // }
  
// }))

router.get('/',async(req,res) => {
  const genres = await Genre.find().sort('name');
  res.send(genres);
// try{
//   const genres = await Genre.find().sort('name');
//   res.send(genres);
// }catch(err){
//   // res.status(500).send('Something is failed!');
//   next(err);
// }

})

router.get('/me',auth,async(req,res,next) => {
    const user = await User.findById(req.user._id).select('-password');
    res.send(user);
 
  
})

router.post('/',[auth,admin],async(req,res) => {
  // const token = req.header('x-auth-token');
  // if (!token) return res.status(401).send('Access denied. No token present');
  console.log(req.user);
  console.log(req.body);
  const {error} = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let genre = new Genre({name:req.body.name});
  genre = await genre.save();
  res.send(genre);
})

router.put('/:id',async(req,res) => {
  const {error} = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const genre = await Genre
                          .findByIdAndUpdate(req.params.id,{
                            $set:{
                              name:req.body.name
                            }
                          },{new:true})

  if(!genre) return res.status(404).send('The genre with given id is not available!');
  res.send(genre);
})

router.delete('/:id',async(req,res) => {
  const genre = await Genre.findByIdAndRemove(req.params.id);
  if(!genre) return res.status(404).send('The genre with given id is not available!');
  res.send(genre);
})

router.get('/:id',async(req,res) => {
  const genre = await Genre.findById(req.params.id);
  if(!genre) return res.status(404).send('The genre with given id is not available!');
  res.send(genre);
})


module.exports = router;


