const express = require('express')
const router = express.Router();
const  userController  = require('../controller/userController');
// const requestSchema = require('../../middleware/validator/schema');

router.post('/v1/register', userController.createUser);
router.post('/v1/login', userController.loginUser);

module.exports = router 