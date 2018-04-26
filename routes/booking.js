const auth = require('../middleware/auth');
const { booking, validate } = require('../models/Booking');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    const bookingsAPI = await booking.find({});
    res.send(bookingsAPI);
})


router.post('/', async (req, res) => {
    console.log(req.body);
    
    const{error}= validate(req.body);                                                        //validate the body with the validator of booking in model
    if(error) return res.status(400).send("Error is  : "+error.details[0].message);

    let newbooking=new booking({
        name: req.body.name,
        property: req.body.property,
        date : req.body.date,
        starting_time: req.body.starting_time,
        ending_time:  req.body.ending_time

    })
    
    newbooking=await newbooking.save();
    res.send(newbooking);
    
})

module.exports = router;