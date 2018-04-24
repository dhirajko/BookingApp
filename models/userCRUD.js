const express = require('express');
const router = express.Router();
const database = require('./database');
const userModel = require('./usersModel');
const bodyParser = require('body-parser');
express().use(bodyParser.json())
//create new User
module.exports = router.get('/', (req, res) => {


})



module.exports = router.post('/add', (req, res) => {
    user = new userModel({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        username: req.body.username,
        email: req.body.email,
        address: req.body.address,
        password: req.body.password
    })
    user.save((err) => {

        if (!err) {
            console.log('created user');
        }
        else {
            console.log(JSON.stringify(err));

        }
    })

})

module.exports = router.get('/find', (req, res) => {
    

})
