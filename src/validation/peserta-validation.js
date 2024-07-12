const Joi = require('joi');

const createPesertaValidation = Joi.object({
  nama: Joi.string().required(),
  umur: Joi.number().integer().positive().required(),
  nomorHp: Joi.string().required(),
  jenisKelamin: Joi.string().valid('Laki-laki', 'Perempuan').required(),
  nik: Joi.string().length(16).required(),
  jawabanBenar: Joi.array().items(Joi.number().integer()).required(),
  point: Joi.number().integer().required(),
});

module.exports = {
  createPesertaValidation,
};
