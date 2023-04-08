const { FAILED } = require("../constants/constants");
const { CustomError } = require("../middleware/error_handler");

const validateRequestBody = (validationSchema) => async (req, res, next) => {
  try {
    const result = await validationSchema.validate(req.body);
    if (result) {
      req.body = result;
    }
    next();
  } catch (error) {
    throw new CustomError(400, error.message);
  }
};
const validateRequestParams = (validationSchema) => async (req, res, next) => {
  try {
    // console.error(`The params is ${req.params.donationId}`);
    const result = await validationSchema.validate(req.params);
    if (result) {
      req.params = result;
    }
    next();
  } catch (error) {
    throw new CustomError(400, error.message);
  }
};

module.exports = { validateRequestBody, validateRequestParams };
