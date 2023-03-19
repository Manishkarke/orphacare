const yup = require("yup");

const createMissingReportSchema = yup.object().shape({
  childLastSeenAddress: yup.string().required(),
  childLastSeenTime: yup.date().required(),
  childAge: yup.number().required().strict().positive(),
  remarks: yup.string(),
  longitude: yup
    .number()
    .min(-180, "Longitude must be between -180 and 180")
    .max(180, "Longitude must be between -180 and 180")
    .required(),
  latitude: yup
    .number()
    .min(-90, "Latitude must be between -90 and 90")
    .max(90, "Latitude must be between -90 and 90")
    .required(),
});

const missingReportIdSchema = yup.object().shape({
  missingReportId: yup.number().integer().required(),
});

const updateMissingReportSchema = yup.object().shape({
  id: yup.number().required(),
  childLastSeenAddress: yup.string(),
  childLastSeenTime: yup.date(),
  childAge: yup.number().strict().positive(),
  remarks: yup.string(),
});
module.exports = {
  createMissingReportSchema,
  missingReportIdSchema,
  updateMissingReportSchema,
};
