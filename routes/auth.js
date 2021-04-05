const express = require('express');
const router = express.Router()

const {signup, signin, signout, createAccountLimiter} = require('../controllers/auth');
const {userValidationRules, validate} = require("../validator/index");


// router.post('/signup', userSignupValidator, signup);
router.post('/signup', createAccountLimiter, userValidationRules(), validate, signup);
router.post('/signin', signin);
router.get('/signout', signout);

module.exports = router;
