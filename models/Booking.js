const mongoose = require('mongoose');
const Joi = require('joi');

const bookingSchema = new mongoose.Schema({
    person: Object,
    property: Object,
    date :Date ,
    starting_time:Number ,
    ending_time: Number 

});


const validateBooking = (booking) => {                                                            //using Joi to validate the input data
    const schema = {
        person: Joi.object(),
        property: Joi.object(),
        date: Joi.date(),
        starting_time: Joi.number().integer(),
        ending_time: Joi.number().integer()
        
    }
    return Joi.validate(booking, schema);
}

const booking =  mongoose.model('booking', bookingSchema);

exports.booking = booking;
exports.validateBooking = validateBooking;