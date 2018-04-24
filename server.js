const express=require('express');
const bodyParser=require('body-parser');
//const database=require('./models/database');
const user=require('./models/userCRUD')



const app=express();

app.listen(3000,(err)=>{
    if(err) throw err;
    else{
        console.log('connected to server');
        
    }
})

app.use(bodyParser.json());
app.use('/user',require('./models/userCRUD'));



//mongoose.connect('mongodb://['+process.env.DB_USERNAME+':'+process.env.DB_PASSWORD+']@'+process.env.DB_HOST+':27017/'+process.env.DB_DATABASE);

app.get('/',(req,res)=>{
    res.send('This is get')
})