const express=require('express');
const router=express.Router();
const database=require('./database');
const userModel=require('./usersModel')

//create new User
module.exports=router.get('/',(req,res)=>{
    res.send('This is user')
    
    })
    


module.exports= router.post('/add',(req,res)=>{
    res.send('This is user post')

})

module.exports=router.get('/find',(req,res)=>{
res.send('This is user get')

})
