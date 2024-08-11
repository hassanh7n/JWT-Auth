const express = require('express');
const router = express.Router();
const {
    dashBoard,
    login
} = require('../controllers/main');


router.route('/dashboard').get(dashBoard);
router.route('/login').post(login);



module.exports = router;