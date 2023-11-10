const router = require('express').Router();
const users = require('./users');

// Main router middle ware, index route
router.get('/', (req, res) => {
    res.send('Hello World!');
})

router.use('/users', users)

module.exports = router;