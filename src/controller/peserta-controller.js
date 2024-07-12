const pesertaService = require('../service/peserta-service');

const createPeserta = async (req, res) => {
  try {
    const peserta = await pesertaService.createPeserta(req.body);
    res.status(201).json(peserta);
  } catch (error) {
    res.status(400).json({ errors: error.message });
  }
};

const deletePeserta = async (req, res) => {
  try {
    await pesertaService.deletePeserta(req.params.id);
    res.status(204).json({ message: 'Peserta berhasil dihapus' });
  } catch (error) {
    res.status(400).json({ errors: error.message });
  }
};

const getPesertaById = async (req, res) => {
  try {
    const peserta = await pesertaService.getPesertaById(req.params.id);
    res.status(200).json(peserta);
  } catch (error) {
    res.status(400).json({ errors: error.message });
  }
};

const getAllPeserta = async (req, res) => {
  try {
    const peserta = await pesertaService.getAllPeserta();
    res.status(200).json(peserta);
  } catch (error) {
    res.status(400).json({ errors: error.message });
  }
};

module.exports = {
  createPeserta,
  deletePeserta,
  getPesertaById,
  getAllPeserta,
};
