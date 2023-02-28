const router = require("express").Router();
const Controller = require("../controller/donation_controller.js");
const { errorHandler } = require("../middleware/error_handler.js");
const validateRequest = require("../validation/validator.js");
const donationSchema = require("../validation/schema/donationSchema.js");
const { accessTokenValidator } = require("../middleware/token_validator.js");

router.post(
  "/createDonation",
  errorHandler(accessTokenValidator),
  errorHandler(validateRequest(donationSchema)),
  errorHandler(Controller.createDonation)
);

module.exports = router;
