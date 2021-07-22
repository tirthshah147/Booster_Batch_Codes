//spread operator

var arr = [1,2,3];

var arr1 = [...arr,4,5,6];

// console.log(arr1);

var obj = {
  name:"Tirth",
  city:"Vadodara"
}

var obj1={
  ...obj,
  gender:"male"
}


// console.log(obj1);


//rest operator

function sum(...rest){
  console.log(num1,num2,rest);
}


sum(2,3,4,5,6);



