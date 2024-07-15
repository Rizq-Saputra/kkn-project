const Quiz = require('../models/quiz');
const { createQuizValidation } = require('../validation/quiz-validation');
const { validate } = require('../validation/validation');

const createQuiz = async (quizData) => {
  // Validasi data request
  const validatedData = validate(createQuizValidation, quizData);

  // Buat quiz
  const quiz = await Quiz.create(validatedData);
  return quiz;
};

const getQuizzesByCategoryId = async (kategoriId) => {
  const quizzes = await Quiz.findAll({ where: { kategoriId } });
  return quizzes;
};

const getQuizById = async (id) => {
  const quiz = await Quiz.findByPk(id);
  return quiz;
};

const deleteQuiz = async (id) => {
  const result = await Quiz.destroy({ where: { id } });
  return result;
};

module.exports = {
  createQuiz,
  getQuizzesByCategoryId,
  getQuizById,
  deleteQuiz,
};
