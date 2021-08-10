const EventEmitter = require('events');
// const emitter = new EventEmitter();

// var url = "https://www.arfu.com";

// function log(message){
//   console.log(message);
//   emitter.on('messageLogged',function(arg){
//     console.log("Listener of obejct2 is called!",arg);
//   })
//   emitter.emit('messageLogged',{id:1,name:"arfu"})
// }

class Logger extends EventEmitter{
  log(message){
    console.log(message);
    this.emit('messageLogged',{id:1,name:"arfu"})
  }
}

module.exports = Logger;

