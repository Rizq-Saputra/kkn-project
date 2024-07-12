const { validate } = require('../validation/validation');
const PesertaValidation = require('../validation/peserta-validation');
const Peserta = require('../models/peserta');

const createPeserta = async (pesertaData) => {
  const validatedData = validate(PesertaValidation.createPesertaValidation, pesertaData);
  const peserta = await Peserta.create(validatedData);
  return peserta;
};

const deletePeserta = async (pesertaId) => {
  const peserta = await Peserta.findByPk(pesertaId);
  if (!peserta) {
    throw new Error('Peserta tidak ditemukan');
  }
  await peserta.destroy();
};

const getPesertaById = async (pesertaId) => {
  const peserta = await Peserta.findByPk(pesertaId);
  if (!peserta) {
    throw new Error('Peserta tidak ditemukan');
  }
  return peserta;
};

const getAllPeserta = async () => {
  const peserta = await Peserta.findAll();
  return peserta;
};

module.exports = {
  createPeserta,
  deletePeserta,
  getPesertaById,
  getAllPeserta,
};
