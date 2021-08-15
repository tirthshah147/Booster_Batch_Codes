// -comments
// -images
// -videos
// -returns
// -orders
// -products
// -rating
// -wishlist
// -cart
//-users

const express = require('express');
const products = require('./products.js');
const users = require('./users');
const app = express();

app.use('/api/products',products);
app.use('/api/users',users);

// localhost:8080/api/products/get-products-details

//users
// app.get('/read-users',(req,res) => {
//   res.send('List of users');
// })

// app.get('/get-user-details/:id',(req,res) =>{
//   const userObj = {
//     id:10,
//     name:"Arafat Alim",
//     status:true
//   }

//   res.send(userObj);
// })

// app.post('/create-user',(req,res) => {
//   res.send('Creating the user!');
// })

// app.put('/update-user/:id',(req,res) => {
//   res.send('Updating the user!');
// })

//products

// app.get('/read-products',(req,res) => {
//   res.send('List of users');
// })

// app.get('/get-products-details/:id',(req,res) =>{
//   const userObj = {
//     id:10,
//     name:"Tin",
//     status:true
//   }

//   res.send(userObj);
// })

// app.post('/create-product',(req,res) => {
//   res.send('Creating the product!');
// })

// app.put('/update-product/:id',(req,res) => {
//   res.send('Updating the product!');
// })



app.listen(8080);




