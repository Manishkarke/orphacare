const router = require("express").Router();
const Controller = require("../controller/home_controller.js");
const { errorHandler } = require("../middleware/error_handler.js");
const { accessTokenValidator } = require("../middleware/token_validator.js");

const missingReportSchema = require("../validation/schema/missingReportSchema.js");

const validateRequest = require("../validation/validator.js");

router.post(
  "/createMissingReport",
  errorHandler(accessTokenValidator),
  errorHandler(validateRequest(missingReportSchema)),
  errorHandler(Controller.createMissingReport)
);

router.get(
  "/getMissingReports",
  errorHandler(accessTokenValidator),
  errorHandler(Controller.getMissingReports)
);

module.exports = router;
