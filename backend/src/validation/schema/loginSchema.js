const yup = require('yup');

const loginSchema = yup.object().shape({
    userEmail: yup.string().email().required(),
    userPassword: yup.string().min(8).required(),
});
module.exports = loginSchema;

