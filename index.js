const express = require('express');
const app = express();
require('dotenv').config();
const dbConnect = require('./database/connection');
const router = require('./routes/index');
const URI = process.env.URI;

// Connect to the database server
dbConnect(URI);

// Main router
app.use('/', router);

app.listen(process.env.PORT, () => {
    console.log(`Server listening on port: ${process.env.PORT}`);
})