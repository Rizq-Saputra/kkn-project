const Joi = require('joi');

const createQuizValidation = Joi.object({
  soal: Joi.string().required(),
  jawaban: Joi.array().items(Joi.string().required()).min(1).required(),
  jawabanBenar: Joi.string().required(),
  kategoriId: Joi.number().integer().positive().required(),
  point: Joi.number().integer().positive().required(),
});

const getQuizValidation = Joi.number().positive().required();

module.exports = {
  createQuizValidation,
  getQuizValidation,
};
