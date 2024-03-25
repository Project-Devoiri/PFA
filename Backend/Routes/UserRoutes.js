const express = require('express');
const router = express.Router();
const { createUserHandler } = require('../Controller/UserController');

router.post('/create', createUserHandler);

module.exports = router;
