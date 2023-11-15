const router = require('express').Router();
const contacts = require('./contacts');
const swagger = require('./swagger');

// Main router middle ware, index route
router.get('/', (req, res) => {
    //#swagger.tags=['Hello World']
    res.send('Hello World!');
})

router.use('/', swagger)

router.use('/contacts', contacts)

module.exports = router;