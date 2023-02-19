const yup = require('yup');

const missingReportSchema = yup.object().shape({
    id: yup.number(),
    reporterName: yup.string().required(),
    childLastSeenAddress: yup.string().required(),
    childLastSeenTime: yup.date().required(),
    childAge: yup.number().required(),
    remarks: yup.string(),
});
module.exports = missingReportSchema;

