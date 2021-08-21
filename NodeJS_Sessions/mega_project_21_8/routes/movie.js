const {Movie,validate} = require('../models/movie');
const {Genre} = require('../models/genre');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();


router.get('/',async(req,res) => {
  const movies = Movie.find().sort('title');
  res.send(movies);
})

router.post('/',async(req,res) => {
  const {error} = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const genre = await Genre.findById(req.body.genreId);
  if(!genre) return res.status(400).send('Invalid Genre for movie!');

  let movie = new Movie({
    title:req.body.title,
    genre:{
      _id:genre._id,
      name:genre.name
    }, // Denormalization
    numberInStock:req.body.numberInStock,
    dailyRentalRate:req.body.dailyRentalRate
  });

  movie = await movie.save();
  res.send(movie);
})


router.put('/:id',async(req,res) => {
  const {error} = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const genre = await Genre.findById(req.body.genreId);
  if(!genre) return res.status(400).send('Invalid Genre for movie!');

  const movie = await Movie.findByIdAndUpdate(req.params.id,{
    $set:{
      title:req.body.title,
      genre:{
        _id:genre._id,
        name:genre.name
      }, // Denormalization
      numberInStock:req.body.numberInStock,
      dailyRentalRate:req.body.dailyRentalRate
    }
  },{new:true});
  if(!movie) return res.status(404).send('The movie with given id does not exist');
  res.send(movie);

})

router.get('/:id',async(req,res) => {
  const movie = await Movie.findById(req.params.id);
  if(!movie) return res.status(404).send('The movie with given id is not available!');
  res.send(movie);
})

module.exports = router;