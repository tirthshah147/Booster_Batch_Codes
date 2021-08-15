const express = require('express');

const router = express.Router();

router.get('/',(req,res) => {
  res.send('Got the request for products!');
})

router.get('/get-products-details',(req,res) =>{
  const userObj = {
    id:10,
    name:"Tin",
    status:true
  }

  res.send(userObj);
})

module.exports = router;



