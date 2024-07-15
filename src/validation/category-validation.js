const Joi = require('joi');

const createCategoryValidation = Joi.object({
  name: Joi.string().required(),
  gambar: Joi.string().uri().optional(),
});

const getCategoryValidation = Joi.number().positive().required();

module.exports = {
  createCategoryValidation,
  getCategoryValidation,
};
