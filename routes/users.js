const router = require('express').Router();
const usersController = require('../controllers/users');

// Get all users middleware
router.get('/', usersController.getAll);

// Get sigle user middleware
router.get('/:id', usersController.getSingle);

module.exports = router;