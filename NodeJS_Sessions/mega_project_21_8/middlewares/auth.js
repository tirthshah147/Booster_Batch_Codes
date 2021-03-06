const jwt = require('jsonwebtoken');
const { User } = require('../models/user');


module.exports = async function(req,res,next) {
  const token = req.header('x-auth-token');
  if(!token) return res.status(401).send('Access denied. No token present');

  // req = {
  //   body: {
  //     name:"Revenge"
  //   }
  // }
  try{
    const decoded = jwt.verify(token,'Zakirloveskatrinakaif');
    req.user = await User.findById(decoded._id);
    next();

  }catch(err){
    res.status(401).send('Invalid token. You are unauthorized');
  }
}