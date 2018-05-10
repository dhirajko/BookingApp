'use strict'

const mongoose = require('mongoose');
const Joi = require('joi');

const propertySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    type: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255,
        
    },
    area: {
        type: Number,
        required: true,
        minlength: 5,
        maxlength: 1024

    }
});

const Property=mongoose.model('property',propertySchema);



const validateProperty = (property) => {                                                            //using Joi to validate the input data
    const schema = {
        name: Joi.string().min(5).max(50).required(),
        email: Joi.string().min(5).max(255).required().email(),
        area: Joi.number()
    }

    return Joi.validate(property, schema);
}
exports.Property=Property;
exports.validateProperty = validateProperty;