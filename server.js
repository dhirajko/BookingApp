

const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);
const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const users = require('./routes/users')
const app = express();


mongoose.connect('mongodb://localhost:27017/udemy', (err) => {
    if (err) throw err;
    else {
        console.log('connected to database');

    }
})


app.listen(3000, (err) => {
    if (err) throw err;
    else {
        console.log('connected to server');

    }
})

app.use(bodyParser.json());
app.use('/api/users', users);



//mongoose.connect('mongodb://['+process.env.DB_USERNAME+':'+process.env.DB_PASSWORD+']@'+process.env.DB_HOST+':27017/'+process.env.DB_DATABASE);

app.get('/', (req, res) => {
    res.send('This is get')
})