//this keyword

//method -> obj
//function -> global (window)

// const person = {
//   name:"Tirth Shah",
//   courses:['nodeJS','reactJs','Javascript'],
//   run(){
//     console.log(this);
//   },
//   showCourses(){
//     this.courses.forEach(course => {
//       console.log(this,course);
//     })
//   }
// }

// person.run();
// person.showCourses();

// function walk(){
//   console.log(this);
// }

// walk();

// function Eat(message){
//   this.eatMessage = message;
//   console.log(this);
// }

// const per = new Eat("I am eating"); 

// function eat(){
//   // console.log(message,name);
//   console.log(this);
//   console.log("hello newtons");
// }

// eat.call({city:"Vadodara"},"I am eating","Tirth");
// eat.apply({city:"Vadodara"},["I am eating","Tirth"]);
// const fn = eat.bind({city:"Vadodara"});
// fn();
// eat.bind({city:"Vadodara"})();



// let city = ["Ahmedabad","Vadodara","Surat","Nagpur"];

// let person = {
//   name:"tirth"
// }


// let person2 = {
//   city:"vadodara"
// }

// person.__proto__ = person2;


// Function.prototype.run = function(){
//   console.log("Tirth ki lag gai!");
// };

// function test(){

// }

const person = {
  firstName:"Tirth",
  lastName:"Shah",
  get fullName(){
    return `${this.firstName} and ${this.lastName}`
  },
  set fullName(value){
    const parts = value.split(' ');
    this.firstName = parts[0];
    this.lastName = parts[1];
  }
}


person.fullName = "Santanu Banerjee";

console.log(person.fullName);
console.log(person);







