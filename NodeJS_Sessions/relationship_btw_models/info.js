//Creating Relationship between models

//Trade off between query performance vs consistency

// Using References (Normalization) -> Consistency

let author = {
  id:12345,
  name : "Tirth Shah",
  numberOfCourses:12
}

let course = {
  author:12345,
  name:"NodeJS"
}

//Using Embedded Documents (Denormalization) -> query performance
let author = {
  id:12345,
  name : "Tirth Shah"
}

let course = {
  author:{
    id:12345,
    name:"Tirth"
  },
  name:"NodeJS"
}


//Hybrid

let author = {
  name:"Tirth",
  //50 properties
}

let course = {
  author:{
    id:12345,
    name:"Tirth"
  },
  name:"NodeJS"
}

