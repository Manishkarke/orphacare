const router = require("express").Router();
const Controller = require("../controller/volunteer_controller.js");
const { errorHandler } = require("../middleware/error_handler.js");
const {
  validateRequestBody,
  validateRequestParams,
} = require("../validation/validator.js");
const { accessTokenValidator } = require("../middleware/token_validator.js");
const {
  createVolunteerSchema,
  volunteerIdSchema,
  updateVolunteerSchema,
} = require("../validation/schema/volunteerSchema");

router.post(
  "/createVolunteer",
  errorHandler(accessTokenValidator),
  errorHandler(validateRequestBody(createVolunteerSchema)),
  errorHandler(Controller.createVolunteer)
);
router.get(
  "/getAllVolunteers",
  errorHandler(accessTokenValidator),
  errorHandler(Controller.getAllVolunteers)
);

router.get(
  "/getVolunteer/:volunteerId",
  errorHandler(accessTokenValidator),
  errorHandler(validateRequestParams(volunteerIdSchema)),
  errorHandler(Controller.getVolunteer)
);

router.post(
  "/updateVolunteer",
  errorHandler(accessTokenValidator),
  errorHandler(validateRequestBody(updateVolunteerSchema)),
  errorHandler(Controller.updateVolunteer)
);
router.delete(
  "/deleteVolunteer/:volunteerId",
  errorHandler(accessTokenValidator),
  errorHandler(validateRequestParams(volunteerIdSchema)),
  errorHandler(Controller.deleteVolunteer)
);
module.exports = router;
