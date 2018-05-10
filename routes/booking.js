const auth = require('../middleware/auth');
const { booking, validateBooking } = require('../models/Booking');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const { User, validateUser} = require('../models/user');
const {Property, validateProperty}= require('../models/property');

router.get('/', async (req, res) => {
    const bookingsAPI = booking.find({}).then(res.send(bookingsAPI));
    
})


router.post('/', async (req, res) => {
    console.log(req.body);
    
    const{error}= validate(req.body);                                                        //validate the body with the validator of booking in model
    if(error) return res.status(400).send("Error is  : "+error.details[0].message);

    const person=User.find({"person" :req.body.name });
    const property=Property.find({"property" :req.body.property });
    
    let newbooking=new booking({

    
    
        name: person,
        property: property,
        date : req.body.date,
        starting_time: req.body.starting_time,
        ending_time:  req.body.ending_time

    })
    
    newbooking=await newbooking.save();
    res.send(newbooking);
    
})

module.exports = router;