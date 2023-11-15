const express = require('express');
const app = express();
require('dotenv').config();
const dbConnect = require('./database/connection');
const router = require('./routes/index');
const bodyParser = require('body-parser');
const cors = require('cors');
const URI = process.env.URI;

// Connect to the database server
dbConnect(URI);

app.use(cors());

// Boody parser, this makes the req body readable
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Z-Key'
    );
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});

// Main router
app.use('/', router);

app.listen(process.env.PORT, () => {
    console.log(`Server listening on port: ${process.env.PORT}`);
})