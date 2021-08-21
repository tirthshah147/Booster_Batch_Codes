// _id:61212ad07c7f291350c10eb0

// 12 bytes
  //4 bytes: timestamp
  //3 bytes: machine identifier
  //2 bytes: process identifier
  //3 bytes: counter

//1 byte = 8 bits
//2 ^ 8 = 256
//2 ^ 24 = 16M


const mongoose = require('mongoose');
const id = new mongoose.Types.ObjectId();
// console.log(id.getTimestamp());
// console.log(id.generationTime);

const isValid = mongoose.Types.ObjectId.isValid('12345');
console.log(isValid);



