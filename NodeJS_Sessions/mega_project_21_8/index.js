const mongoose = require('mongoose');
const express = require('express');
const auth = require('./routes/auth');
const genres = require('./routes/genre');
const customers = require('./routes/customer');
const movies = require('./routes/movie');
const rentals = require('./routes/rental');
const users = require('./routes/user');
const app = express();

mongoose.connect('mongodb://localhost/tvmaze',{useNewUrlParser:true,useUnifiedTopology:true})
        .then(() => console.log('DB is connected!'))
        .catch(err => console.log('Not able to connect',err))

app.use(express.json());

app.use('/api/genres',genres);
app.use('/api/customers',customers);
app.use('/api/movies',movies);
app.use('/api/rentals',rentals);
app.use('/api/users',users);
app.use('/api/auth',auth);

const port = process.env.PORT || 8080;
app.listen(port,() => console.log('Listening to port',port))


