const yup = require('yup');

const  registerSchema = yup.object().shape({
  name: yup.string().required(),
  address: yup.string().required(),
  emailAddress: yup.string().email().required(),
  phoneNumber: yup.string().matches(/^\d{10}$/).required(),
  password: yup.string().min(8).required(),
});
module.exports = registerSchema;

