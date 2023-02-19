const router = require('express').Router();
const Controller = require("../controller/auth_controller.js");
const errorHandler = require('../middleware/error_handler.js');

router.post('/signup', errorHandler(Controller.signUpUser));
router.post('/signin', errorHandler(Controller.loginUser));


module.exports = router;