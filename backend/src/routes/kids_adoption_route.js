const router = require("express").Router();
const Controller = require("../controller/kids_adoption_controller.js");
const { errorHandler } = require("../middleware/error_handler.js");
const {
  validateRequestBody,
  validateRequestParams,
} = require("../validation/validator.js");
const { accessTokenValidator } = require("../middleware/token_validator.js");
const {
  createKidSchema,
  kidIdSchema,
  updateKidSchema,
} = require("../validation/schema/kidsAdoptionSchema");
router.post(
  "/createKid",
  errorHandler(accessTokenValidator),
  errorHandler(validateRequestBody(createKidSchema)),
  errorHandler(Controller.createKid)
);
router.get(
  "/getAllKids",
  errorHandler(accessTokenValidator),
  errorHandler(Controller.getAllKids)
);
router.get(
  "/requestForAdoption/:id",
  errorHandler(accessTokenValidator),
  errorHandler(Controller.requestForAdoption)
);
router.get(
  "/getKid/:kidId",
  errorHandler(accessTokenValidator),
  errorHandler(validateRequestParams(kidIdSchema)),
  errorHandler(Controller.getKid)
);

router.post(
  "/updateKid",
  errorHandler(accessTokenValidator),
  errorHandler(validateRequestBody(updateKidSchema)),
  errorHandler(Controller.updateKid)
);
router.delete(
  "/deleteKid/:KidId",
  errorHandler(accessTokenValidator),
  errorHandler(validateRequestParams(kidIdSchema)),
  errorHandler(Controller.deleteKid)
);
module.exports = router;
