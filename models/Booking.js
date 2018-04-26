const mongoose = require('mongoose');
const Joi = require('joi');

const bookingSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    property: String,
    date: Number ,
    starting_time:Number ,
    ending_time: Number 

});


const validateBooking = (booking) => {                                                            //using Joi to validate the input data
    const schema = {
        name: Joi.string().min(5).max(50).required(),
        property: Joi.string(),
        date: Joi.number().integer(),
        starting_time: Joi.number().integer(),
        ending_time: Joi.number().integer()
        
    }
    return Joi.validate(booking, schema);
}

const booking =  mongoose.model('booking', bookingSchema);

exports.booking = booking;
exports.validate = validateBooking;