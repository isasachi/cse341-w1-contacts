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

// Main router
app.use('/', router);

app.listen(process.env.PORT, () => {
    console.log(`Server listening on port: ${process.env.PORT}`);
})