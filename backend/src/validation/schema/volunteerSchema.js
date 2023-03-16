const yup = require("yup");

const createVolunteerSchema = yup.object().shape({
  name: yup.string().required(),
  age: yup.number().required(),
  picture: yup.string().required(),
});
const volunteerIdSchema = yup.object().shape({
  volunteerId: yup.number().integer().required(),
});
const updateVolunteerSchema = yup.object().shape({
  id: yup.number().integer().strict().required(),
  name: yup.string().required(),
  age: yup.number().required(),
  picture: yup.string().required(),
});

module.exports = {
  createVolunteerSchema,
  volunteerIdSchema,
  updateVolunteerSchema,
};
