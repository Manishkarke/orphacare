const yup = require('yup');

const loginSchema = yup.object().shape({
    emailAddress: yup.string().email().required(),
    password: yup.string().min(8).required(),
});
module.exports = loginSchema;

