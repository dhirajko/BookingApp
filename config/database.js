const mongoose = require('mongoose');
const dotenv = require('dotenv').config();;


Mongodbconnection=mongoose.connect(process.env.MONGOLAB_URI, (err) => {
    if (err) throw err;
    else {
        console.log('connected to database');

    }
})
exports.modules=Mongodbconnection;