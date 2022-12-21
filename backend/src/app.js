const express = require ('express');
const router = require('./router');
const cors = require('cors');

const app = express(); 

app.use(express.json());
app.use(cors())
// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', 'http://localhost:8080')
//     res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
   
//     next()
// });

app.use(router);


module.exports = app; 