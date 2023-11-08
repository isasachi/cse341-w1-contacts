const express = require('express');
const app = express();
const router = require('./routes/index');
const port = 8080;

app.use('/', router);

app.listen(port, () => {
    console.log(`Server listening on port: ${port}`);
})