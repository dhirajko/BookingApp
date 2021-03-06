const config=require('config');
const auth=require('./routes/auth');
const booking= require('./routes/booking')
const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);
const MongodbConnection=require('./config/database');
const express = require('express');
const bodyParser = require('body-parser');
const users = require('./routes/users');
const https = require('https');
const http = require('http');
const fs = require('fs');
const helmet = require('helmet');
const cors = require('cors');
var httpsRedirect = require('express-https-redirect');
const app = express();



const sslkey = fs.readFileSync('ssl-key.pem');
const sslcert = fs.readFileSync('ssl-cert.pem')

const options = {
    key: sslkey,
    cert: sslcert
};

https.createServer(options, app).listen(3000, (err) => {
    if (err) throw err;
    else {
        console.log('connected to secure server');

    }
})

MongodbConnection;


                                                                //please define your dhiraj_jwtPrivateKey to start app e.g.
if(!config.get('jwtPrivateKey')){                               // export dhiraj_jwtPrivateKey=mySecureKey      (in terminal before nodemon)
    console.error('Fatal Errot: jwtPrivateKey is not definde');
    process.exit(1);
}





app.use('/', httpsRedirect(true));
app.use(cors());
app.use(helmet());
app.use(bodyParser.json());
app.use('/api/users', users);
app.use('/api/auth',auth);
app.use('/api/booking',booking)


app.get('/', (req, res) => {
    res.send('This is get')
})