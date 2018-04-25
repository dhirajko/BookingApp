const express = require('express');
const router = express.Router();
const database = require('./database');
const userModel = require('./usersModel');
const bodyParser = require('body-parser');
express().use(bodyParser.json())
//create new User


module.exports = router.get('/', (req, res) => {
res.send('This is user place')

})



module.exports = router.post('/user', (req, res) => {
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

module.exports = router.get('/user', (req, res) => {
  userModel.find({},(err, users)=> {
    if (err) throw err;  
    res.send(users);
    console.log(users);
  });

})

module.exports=router.put('/user',(req,res)=>{

    userModel.findOneAndUpdate({ username: req.body.username }, { 
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        username: req.body.username,
        email: req.body.email,
        address: req.body.address,
        password: req.body.password     
        
         }, function(err, user) {
             
        if (err) throw err;
      
        // we have the updated user returned to us
        console.log(user);
      });


})


