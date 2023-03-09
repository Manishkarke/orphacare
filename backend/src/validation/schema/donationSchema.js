const yup = require("yup");
const Donation = require("../../constants/enums");

const createDonationSchema = yup.object().shape({
  weight: yup.number().integer().required(),
  donationType: yup.mixed().oneOf(Object.values(Donation)).required(),
});

const donationIdSchema = yup.object().shape({
  donationId: yup.number().integer().required(),
});

const updateDonationSchema = yup.object().shape({
  id: yup.number().integer().strict().required(),
  weight: yup.number().integer().required(),
  donationType: yup.mixed().oneOf(Object.values(Donation)).required(),
});
module.exports = {
  donationIdSchema,
  createDonationSchema,
  updateDonationSchema,
};
