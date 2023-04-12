const yup = require("yup");
const { Gender } = require("../../constants/enums");
const { Caste } = require("../../constants/enums");
const { Provience } = require("../../constants/enums");

const createKidSchema = yup.object().shape({
  picture: yup.string().required(),
  name: yup.string().required(),
  surname: yup.string().required(),
  age: yup.number().required().positive().max(14),
  caste: yup.mixed().oneOf(Object.values(Caste)).required(),
  gender: yup.mixed().oneOf(Object.values(Gender)).required(),
  provience: yup.mixed().oneOf(Object.values(Provience)).required(),
  description: yup.string().required(),
});

const kidIdSchema = yup.object().shape({
  kidId: yup.number().integer().required(),
});
const filteredKidSchema = yup.object().shape({
  age: yup.number().positive().max(14),
  caste: yup.mixed().oneOf(Object.values(Caste)),
  gender: yup.mixed().oneOf(Object.values(Gender)),
});

const updateKidSchema = yup.object().shape({
  id: yup.number().integer().required(),
  picture: yup.string(),
  name: yup.string(),
  surname: yup.string(),
  age: yup.number().positive().max(14),
  caste: yup.mixed().oneOf(Object.values(Caste)),
  gender: yup.mixed().oneOf(Object.values(Gender)),
  provience: yup.mixed().oneOf(Object.values(Provience)),
  description: yup.string(),
});
module.exports = {
  createKidSchema,
  kidIdSchema,
  updateKidSchema,
  filteredKidSchema,
};
