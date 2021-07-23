//throttling

function throttle(func,wait){
  let last = 0;
  return function(...args){
    const context = this;
    const now = new Date().getTime();
    if (now-last < wait) {
      return;
    }
    last = now;
    return func.apply(context,args);
  }
}

let counter = 0;
const getData = (event) => {
  console.log("Fetching data...",counter++);
  document.getElementById('text').innerHTML = event.target.value;
  // console.log(event.target.value);
}

const betterFunction = throttle(getData,1000);









//debouncing

//concept 1

// function debounce(func,wait){
//   let timeout;
//   return (...args) => {  //here ...args is rest operator
//     clearTimeout(timeout);
//     timeout = setTimeout(()=>func(...args),wait); //here ...args is spread operator
//   }
// }

// function sayHello(x) {
//   console.log(x);
// }


// const debounceSayHello = debounce(sayHello, 1000);

// debounceSayHello(1); //step1
// debounceSayHello(2); //step2
// debounceSayHello(3); //step3
// setTimeout(() => debounceSayHello(4),1000) //step4 




//concept 1

// function debounce(func,wait){
//   let timeout;
//   return function(...args){  //here ...args is rest operator
//     const context = this;
//     console.log(context);
//     clearTimeout(timeout);
//     timeout = setTimeout(()=>func.apply(context,...args),wait); //here ...args is spread operator
//   }
// }

// function sayHello(){
//   console.log("My name is", this.name);
// }

// const person={
//   name:"Tirth",
//   city:"Vadodara",
//   message:debounce(sayHello)
// }


// person.message();


// obj1 = {
//   message:function(){
//     console.log("hello world",this); //this = window
//   }
// }

// obj1.message(); // this = obj1




// obj2 = {
//   message2:() => {
//     console.log("hello world",this); //this = obj2
//   }
// }



//example of debouncing

// function debounce(func,wait){
//   let timeout;
//   return function(...args){  //here ...args is rest operator
//     const context = this;
//     console.log(args);
//     // console.log(context);
//     clearTimeout(timeout);
//     timeout = setTimeout(()=>func.apply(context,args),wait); //here ...args is spread operator
//   }
// }

// let counter = 0;
// const getData = (event) => {
//   console.log("Fetching data...",counter++);
//   document.getElementById('text').innerHTML = event.target.value;
//   // console.log(event.target.value);
// }

// const betterFunction = debounce(getData,1000);












