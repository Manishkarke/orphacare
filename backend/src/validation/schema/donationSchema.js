const yup = require("yup");
const { Donation } = require("../../constants/enums");

const createDonationSchema = yup.object().shape({
  weight: yup.number().integer().required(),
  donationType: yup.mixed().oneOf(Object.values(Donation)).required(),
});

const donationIdSchema = yup.object().shape({
  donationId: yup.number().integer().required(),
  donateAmount: yup.number().required().positive().min(1),
});

const updateDonationSchema = yup.object().shape({
});
module.exports = {
  donationIdSchema,
  createDonationSchema,
  updateDonationSchema,
};
