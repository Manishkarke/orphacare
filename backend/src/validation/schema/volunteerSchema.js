const yup = require("yup");

const createVolunteerSchema = yup.object().shape({
  name: yup.string().required(),
  age: yup.number().required().positive().min(16).max(123),
  picture: yup.string().required(),
});
const volunteerIdSchema = yup.object().shape({
  volunteerId: yup.number().integer().required(),
});
const updateVolunteerSchema = yup.object().shape({
  id: yup.number().integer().required(),
  name: yup.string(),
  age: yup.number().positive().min(16).max(123),
  picture: yup.string(),
});

module.exports = {
  createVolunteerSchema,
  volunteerIdSchema,
  updateVolunteerSchema,
};
