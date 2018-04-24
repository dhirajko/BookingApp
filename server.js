const express=require('express');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');



const app=express();
app.listen(3000,(err,res)=>{
    if(err){
        console.log('Some err : '+err);
        
    }
    else{
        console.log('Connected Successfully');
        
    }
})