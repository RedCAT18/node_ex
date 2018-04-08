import express from 'express';
import mysql from 'mysql';
import bodyParser from 'body-parser';

const router = express.Router();

//db connetion setting

const connection = mysql.createConnection({
    host: 'localhost', 
    port: 3306,
    user: 'root',
    password: '',
    database: 'app',
});

connection.connect(function(err){
    if(err) {
        console.error('mysql connection error.');
        console.error(err);
        throw err;
    } else {
        console.log('Connect successfully.');
    }
});



export default  router;