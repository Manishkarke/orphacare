const yup = require("yup");
const { Gender } = require("../../constants/enums");
const { Caste } = require("../../constants/enums");
const { Provience } = require("../../constants/enums");

const createKidSchema = yup.object().shape({
  picture: yup.string().required(),
  name: yup.string().required(),
  surname: yup.string().required(),
  age: yup.number().required(),
  caste: yup.mixed().oneOf(Object.values(Caste)).required(),
  gender: yup.mixed().oneOf(Object.values(Gender)).required(),
  provience: yup.mixed().oneOf(Object.values(Provience)).required(),
  description: yup.string().required(),
});

const kidIdSchema = yup.object().shape({
  kidsId: yup.number().integer().required(),
});

const updateKidSchema = yup.object().shape({
  id: yup.number().integer().strict().required(),
  picture: yup.string().required(),
  name: yup.string().required(),
  surname: yup.string().required(),
  age: yup.number().required(),
  caste: yup.mixed().oneOf(Object.values(Caste)).required(),
  gender: yup.mixed().oneOf(Object.values(Gender)).required(),
  provience: yup.mixed().oneOf(Object.values(Provience)).required(),
  description: yup.string().required(),
});
module.exports = {
  createKidSchema,
  kidIdSchema,
  updateKidSchema,
};
