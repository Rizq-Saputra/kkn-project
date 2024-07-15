const Joi = require('joi');

const createQuizValidation = Joi.object({
  soal: Joi.string().required(),
  jawaban: Joi.array().items(Joi.string()).required(),
  jawabanBenar: Joi.string().required(),
  gambar: Joi.string().uri().optional().allow(''),
  kategoriId: Joi.number().integer().required(),
  point: Joi.number().integer().required(),
});

module.exports = {
  createQuizValidation,
};
