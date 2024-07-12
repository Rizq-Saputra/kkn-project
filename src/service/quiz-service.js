// service/quiz-service.js
const Quiz = require('../models/quiz'); // Ensure this path is correct

const createQuiz = async (quizData) => {
  const quiz = await Quiz.create(quizData);
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
