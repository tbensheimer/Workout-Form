const express = require('express');
const {signupUser, loginUser} = require("../controllers/userController");

const router = express.Router();

router.post('/signupUser', signupUser);

router.post('/loginUser', loginUser);

module.exports = router;
