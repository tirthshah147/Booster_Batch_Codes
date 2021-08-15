const express = require('express');

const router = express.Router();

router.get('/read-users',(req,res) => {
  res.send('List of users');
})

router.get('/get-user-details/:id',(req,res) =>{
  const userObj = {
    id:10,
    name:"Arafat Alim",
    status:true
  }

  res.send(userObj);
})

router.post('/create-user',(req,res) => {
  res.send('Creating the user!');
})

router.put('/update-user/:id',(req,res) => {
  res.send('Updating the user!');
})




module.exports = router;