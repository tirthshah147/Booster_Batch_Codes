// const c = require('fs');
// console.log(c.readFile);
// console.log("Hiii Tirth!");    

// const osMod = require('os');
// console.log(osMod.cpus());

const Logger = require('./logger');
const emitter = new Logger();

emitter.on('messageLogged',(arg) => {
  console.log('Listener OF SCRIPT2 is called',arg);
})

emitter.log('message');

