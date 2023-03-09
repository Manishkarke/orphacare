const router = require("express").Router();
const Controller = require("../controller/auth_controller.js");
const { errorHandler } = require("../middleware/error_handler.js");
const { validateRefreshToken } = require("../services/jwt_handler.js");

const registerSchema = require("../validation/schema/registerSchema.js");
const loginSchema = require("../validation/schema/loginSchema.js");

const { validateRequestBody } = require("../validation/validator.js");

router.post(
  "/signup",
  errorHandler(validateRequestBody(registerSchema)),
  errorHandler(Controller.signUpUser)
);

router.post(
  "/signin",
  errorHandler(validateRequestBody(loginSchema)),
  errorHandler(Controller.loginUser)
);
//TOOD: LATER
// router.post('/refreshToken', errorHandler(validateRefreshToken), errorHandler(Controller.loginUser));

module.exports = router;
