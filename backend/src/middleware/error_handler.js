class CustomError extends Error {
    constructor(statusCode, message) {
        super(message);
        this.statusCode = statusCode;
        this.message = message;
    }
}

const errorHandler = (func) => {
  return async (req, res, next) => {
    try {
      await func(req, res, next);
    } catch (err) {
      console.error(err);
      let statusCode = 500;
      let message = 'Internal server error';

      if (err instanceof CustomError) {
        statusCode = err.statusCode;
        message = err.message;
      } else if (err.errors) {
        statusCode = 400;
        message = err.errors[0];
      }

      res.status(statusCode).json({ status: 'error', message: message, data: null });
    }
  };
};

module.exports = {
    CustomError,
    errorHandler,
};
