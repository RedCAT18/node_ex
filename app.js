import express from 'express';
import mysql from 'mysql';
import bodyParser from 'body-parser';

import router from './router';

const app = express();

app.use(router);

//db connetion setting

// const connection = mysql.createConnection({
//     host: 'localhost', 
//     port: 3306,
//     user: 'root',
//     password: '',
//     database: 'app',
// });

// connection.connect(function(err){
//     if(err) {
//         console.error('mysql connection error.');
//         console.error(err);
//         throw err;
//     } else {
//         console.log('Connect successfully.');
//     }
// });

//express middleware use.

app.use(bodyParser.json()); // data body parsing
app.use(bodyParser.urlencoded({extended: true})); // encode unicord url

// const port = 3000;

// app.get('/users', (req, res)=>{
//     const query = connection.query('SELECT * FROM users', (err, rows)=>{
//         if(err) throw err;
//         const users = rows.length !== 0 ? rows : { message: 'No data selected.' };
//         res.json(users);
//     });
// });

app.listen(port, ()=>{
    console.log(`Server running at ${port}`);
});

