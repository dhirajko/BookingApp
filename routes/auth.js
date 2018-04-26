const Joi =require('joi');                                                              // to validate the input 
const bcrypt = require('bcrypt');
const _ = require('lodash');                                                            //for picking the required data only from object
const { User } = require('../models/user')
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();


router.post('/', async (req, res) => {
    const { error } = validate(req.body);                                               //validating the body
    if (error) return res.status(400).send(error.details[0].message);

    let user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).send(' Invalid email or password');
   
    const ValidPassword=await    bcrypt.compare(req.body.password,user.password);           //bcrypting the req password with user stored password
    if(!ValidPassword) return res.status(400).send('Invalid email or password');

    res.send (true);
})

const validate = (req) => {                                                            //using Joi to validate the input data i.e req with schema defined
    const schema = {
        email: Joi.string().min(5).max(255).required().email(),
        password: Joi.string().min(5).max(50).required()
    }

    return Joi.validate(req, schema);
}



module.exports = router;