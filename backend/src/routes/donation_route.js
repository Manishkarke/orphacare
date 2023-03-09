const router = require("express").Router();
const Controller = require("../controller/donation_controller.js");
const { errorHandler } = require("../middleware/error_handler.js");
const {
  validateRequestBody,
  validateRequestParams,
} = require("../validation/validator.js");
const {
  donationIdSchema,
  createDonationSchema,
  updateDonationSchema,
} = require("../validation/schema/donationSchema.js");
const { accessTokenValidator } = require("../middleware/token_validator.js");

router.post(
  "/createDonation",
  errorHandler(accessTokenValidator),
  errorHandler(validateRequestBody(createDonationSchema)),
  errorHandler(Controller.createDonation)
);
router.get(
  "/getAllDonations",
  errorHandler(accessTokenValidator),
  errorHandler(Controller.getAllDonations)
);
router.get(
  "/getMyDonation",
  errorHandler(accessTokenValidator),
  errorHandler(Controller.getMyDonations)
);
router.get(
  "/getDonation/:donationId",
  errorHandler(accessTokenValidator),
  errorHandler(validateRequestParams(donationIdSchema)),
  errorHandler(Controller.getDonation)
);

router.post(
  "/updateDonation",
  errorHandler(accessTokenValidator),
  errorHandler(validateRequestBody(updateDonationSchema)),
  errorHandler(Controller.updateDonation)
);
router.delete(
  "/deleteDonation/:donationId",
  errorHandler(accessTokenValidator),
  errorHandler(validateRequestParams(donationIdSchema)),
  errorHandler(Controller.deleteDonation)
);
module.exports = router;
