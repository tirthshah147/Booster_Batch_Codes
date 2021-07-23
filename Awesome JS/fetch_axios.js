//fetch

//get request

// fetch('https://reqres.in/api/users?page=2')
//   .then(res => res.json())
//   .then(response => console.log(response))
//   .catch(err => console.log("error",err));

  //async & await 

  // async function fetching(){
  //   try{
  //     const res = await fetch('https://reqres.in/api/users?page=2');
  //     const response = await res.json();
  //     console.log(response);
  //   }catch(err){
  //     console.log("error",err);
  //   }
  // }

  // fetching();

// data = {
//   "name": "zakir",
//   "job": "leader"
// }

  // fetch('https://reqres.in/api/users',{
  //   method:"POST",
  //   headers:{
  //     "Content-type": "application/json"
  //   },
  //   body: JSON.stringify(data)
  // })
  // .then(res => res.json())
  // .then(response => console.log(response))
  // .catch(err => console.log("error",err));


  //   async function storing(){
  //   try{
  //     const res = await fetch('https://reqres.in/api/users',{
  //       method:"POST",
  //       headers:{
  //         "Content-type": "application/json"
  //       },
  //       body: JSON.stringify(data)
  //     });

  //     const response = await res.json();
  //     console.log(response);
  //   }catch(err){
  //     console.log("error",err);
  //   }
  // }

  // storing();

  

//axios
// axios.get('https://reqres.in/api/users?page=2')
//       .then(res => console.log(res));

// data = {
//   "name": "zakir",
//   "job": "leader"
// }

// axios.post('https://reqres.in/api/users', JSON.stringify(data))
// .then(res => console.log(res.data));





//Promise.all()

// const promise1 = new Promise((resolve,reject) => {
//   setTimeout(resolve,5000,"Hiiii");
// })
// const promise2 = new Promise((resolve,reject) => {
//   setTimeout(resolve,2000,"Hiiii babes");
// })
// const promise3 = new Promise((resolve,reject) => {
//   setTimeout(resolve,5000,"Hiiii Drituuuu");
// })

const urls = [
  'http://jsonplaceholder.typicode.com/posts',
  'http://jsonplaceholder.typicode.com/comments',
  'http://jsonplaceholder.typicode.com/users'
]


Promise.all(urls.map(url => fetch(url).then(resp => resp.json())))
      .then(response => console.log(response));






















































































































// fetch('https://reqres.in/api/users?page=2')
//   .then(res => res.json())
//   .then(response => console.log(response));

// data={
//   "name": "morpheus",
//   "job": "leader"
// }

//   fetch('  https://reqres.in/api/users', {
//     method:"POST",
//     body:JSON.stringify(data),
//     headers: {
//       "Content-type": "application/json"
//     }
//   })
//   .then(res => res.json())
//   .then(response => console.log(response))
//   .catch(err => console.log("Error",err));


// data={
//   "name": "morpheus",
//   "job": "leader"
// }

// axios.get('https://reqres.in/api/users?page=2')
//       .then(res => console.log(res.data));

// axios.post('https://reqres.in/api/users',data)
//       .then(res => console.log(res.data));


//Promises

// const promise1 = Promise.resolve(3);
// const promise2 = 42;
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 5000, 'foo');
// });

// Promise.all([promise1, promise2, promise3]).then((values) => {
//   console.log(values);
// });


