const yup = require("yup");
const Donation = require("../../constants/enums");

const donationSchema = yup.object().shape({
  name: yup.string().required(),
  address: yup.string().required(),
  phoneNumber: yup
    .string()
    .matches(/^\d{10}$/)
    .required(),
  emailAddress: yup.string().email().required(),
  weight: yup.number().integer().required(),
  age: yup.number().integer().required(),
  donationType: yup.mixed().oneOf(Object.values(Donation)).required(),
});
module.exports = donationSchema;
