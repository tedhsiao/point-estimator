// dependencies
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const path = require('path');

// setting up server
const app = express();

// middleware 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(express.static(path.join(__dirname, './../client/build')));

// test api
app.get('/', (req, res)=> {
    res.send('Hello World');
});

// listening on port 3000
app.listen(3000, err=> {
    console.log('listening on port 3000');
});
