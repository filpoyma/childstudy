const express = require('express');
const router = express.Router();
const {requireSignin, isAdmin, isAuth} = require('../controllers/auth');

const {userById, read} = require('../controllers/user');
const {postTecResults, deleteTecResults} = require('../controllers/tectest');

router.get('/:userId', requireSignin, isAuth, read); // Get All TECTESTS Results
router.post('/:userId', requireSignin, isAuth, postTecResults); //add new testResult
router.delete('/:userId', requireSignin, isAdmin, deleteTecResults); //delete testResult

router.param('userId', userById);

module.exports = router;