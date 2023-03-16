const router = require("express").Router();
const Controller = require("../controller/missing_report_controller.js");
const { errorHandler } = require("../middleware/error_handler.js");
const { accessTokenValidator } = require("../middleware/token_validator.js");
const {
  missingReportIdSchema,
  createMissingReportSchema,
  updateMissingReportSchema,
} = require("../validation/schema/missingReportSchema.js");

const {
  validateRequestBody,
  validateRequestParams,
} = require("../validation/validator.js");

router.post(
  "/createMissingReport",
  errorHandler(accessTokenValidator),
  errorHandler(validateRequestBody(createMissingReportSchema)),
  errorHandler(Controller.createMissingReport)
);

router.get(
  "/getAllMissingReports",
  errorHandler(accessTokenValidator),
  errorHandler(Controller.getAllMissingReports)
);
router.get(
  "/getMyMissingReports",
  errorHandler(accessTokenValidator),
  errorHandler(Controller.getMyMissingReport)
);
router.get(
  "/getMissingReport/:missingReportId",
  errorHandler(accessTokenValidator),
  errorHandler(validateRequestParams(missingReportIdSchema)),
  errorHandler(Controller.getMissingReport)
);
router.post(
  "/updateMissingReport",
  errorHandler(accessTokenValidator),
  errorHandler(validateRequestBody(updateMissingReportSchema)),
  errorHandler(Controller.updateMissingReport)
);
router.delete(
  "/deleteMissingReport/:missingReportId",
  errorHandler(accessTokenValidator),
  errorHandler(validateRequestParams(missingReportIdSchema)),
  errorHandler(Controller.deleteMissingReport)
);
module.exports = router;
