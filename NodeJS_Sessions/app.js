// const EventEmitter = require('events');
// const emitter = new EventEmitter(); //object1

// //Register the listener
// emitter.on('messageLogged',function(arg){
//   console.log("Listener of obejct1 is called!",arg);
// })

// // emitter.emit('messageLogged',{id:1,name:"arfu"});

// const log = require('./logger');
// log("Mera naam chun chun chun");

// const EventEmitter = require('events');
const Logger = require('./logger');
const logger = new Logger();

logger.on('messageLogged',(arg) => {
  console.log('Listener of app is called',arg);
})

logger.log('message');















//intro

// const largeNumber = 567890;
// console.log(module);
// exports = {largeNumber, arfu:"I am fan of Arafat"};
// export default largeNumber;

