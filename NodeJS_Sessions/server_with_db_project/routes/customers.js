const express = require('express');
const router = express.Router();
const {validateCustomer,Customer} = require('../models/customers');

router.get('/',async (req,res) => {
  const customers = await Customer.find().sort({name:1});
  return res.send(customers);
});

router.post('/',async (req,res) => {
  const {error} = validateCustomer(req.body);

  if (error) {
    res.status(400).send(error.details[0].message);
    return;
  }
  
  let customer = new Customer({
    name:req.body.name,
    phone:req.body.phone,
    isGold:req.body.isGold
  })

  customer = await customer.save();
  res.send(customer);
});

module.exports = router;