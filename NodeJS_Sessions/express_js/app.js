const express = require('express');
const app = express();


app.get('/',(req,res) =>{
  res.send('Hello world!');
});

app.get('/api/courses',(req,res) => {
  res.send([1,2,3]);
})

app.get('/api/courses/:id',(req,res) => {
  res.send(req.params.id);
})

app.get('/api/post/:year/:month',(req,res) => {
  res.send(req.params);
})


app.get('/api/blog',(req,res) => {
  res.send(req.query);
})

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}...`))


// app.post();


// app.put();


// app.delete();




