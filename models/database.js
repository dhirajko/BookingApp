'use strict'

const mongoose=require('mongoose');
require('dotenv').config();


module.exports= mongoose.connect('mongodb://admin:admin@localhost:27017/project',(err)=>{
    if (err) throw err;
    else{
        console.log('connected to database');
        
    }
})


/*module.exports= .then((err,res)=>{
    if(err) {
        console.log('Some err in db Connection : '+ err);
        
    }
    else{
        console.log('COnnected to database');
        
    }
})*/