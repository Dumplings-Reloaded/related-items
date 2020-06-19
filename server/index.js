const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const port = 8080;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded( {extended: true} ));
app.use(morgan('dev'));
app.use(cors());
app.listen(port, () => {console.log('Server running on localhost:', port)});

app.get('/', (req, res) => {res.send('Hello from server!')})