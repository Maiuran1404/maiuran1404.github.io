//import npm packages
const express  = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');

const app = express();
const PORT = 8080;
const MONGODB_URI = 'mongodb+srv://maiuran:maiuran@rest.m3zlv.mongodb.net/rest?retryWrites=true&w=majority';

//Connect to mongoDB Atlas with Mongoose
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected!! :D ')
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Connect routes
const routes = require('./routes/api');
app.use('/api', routes);


//HTTP LOGGER
app.use(morgan('tiny'));

app.listen(PORT, console.log(`Server is starting at ${PORT}`))