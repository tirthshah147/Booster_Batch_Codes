const express = require('express');
const coursesRoute = require('./routes/courses');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://localhost/newtonschool',{useNewUrlParser:true,useUnifiedTopology:true})
        .then(() => console.log('Connected to mongoDb'))
        .catch(err => console.log('Not able to connect with MongoDB',err))


app.use(express.json());        

//routes
app.use('/api/courses',coursesRoute);

const port = process.env.PORT || 8080;
// const port = 8080;
app.listen(port,() => console.log(`Listening on port ${port}...`));


