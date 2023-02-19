const { FAILED } = require('../constants/constants')
const { CustomError } = require('../middleware/error_handler')

const validateRequest = (validationSchema) => async (req, res, next) => {
  try {
    const result = await validationSchema.validate(req.body)
    if (result) {
      req.body = result
    }
    next()
  } catch (error) {
    throw new CustomError(400,error.message);
  }
}

module.exports = validateRequest
