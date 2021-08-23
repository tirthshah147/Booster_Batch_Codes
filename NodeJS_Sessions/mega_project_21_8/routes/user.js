const {User,validate} = require('../models/user');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const express = require('express');
const router = express.Router();
const _ = require('lodash');

router.post('/',async(req,res) => {
  const {error} = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let user = await User.findOne({email: req.body.email});
  if(user) return res.status(400).send("User already registered!");

  user = new User(_.pick(req.body, ['name','email','password']));
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password,salt);
  // user = new User({
  //   name:req.body.name,
  //   email:req.body.email,
  //   password:req.body.password
  // })

  user = await user.save();
  const token = user.generateAuthToken();
  res.header('x-auth-token',token).send(_.pick(user, ['name','email']));
  // res.send({
  //   name:user.name,
  //   email:user.email
  // });

})


module.exports = router;



