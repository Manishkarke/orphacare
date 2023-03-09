const yup = require("yup");

const createMissingReportSchema = yup.object().shape({
  childLastSeenAddress: yup.string().required(),
  childLastSeenTime: yup.date().required(),
  childAge: yup.number().required(),
  remarks: yup.string(),
});

const missingReportIdSchema = yup.object().shape({
  missingReportId: yup.number().integer().required(),
});

const updateMissingReportSchema = yup.object().shape({
  id: yup.number(),
  childLastSeenAddress: yup.string().required(),
  childLastSeenTime: yup.date().required(),
  childAge: yup.number().required(),
  remarks: yup.string(),
});
module.exports = {
  createMissingReportSchema,
  missingReportIdSchema,
  updateMissingReportSchema,
};
