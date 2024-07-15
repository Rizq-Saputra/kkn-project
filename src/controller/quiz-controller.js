/* eslint-disable consistent-return */
const QuizService = require('../service/quiz-service');

const createQuiz = async (req, res, next) => {
  try {
    const quiz = await QuizService.createQuiz(req.body);
    res.status(201).json({ message: 'Quiz created successfully', data: quiz });
  } catch (error) {
    next(error);
  }
};

const getQuizzesByCategoryId = async (req, res, next) => {
  try {
    const quizzes = await QuizService.getQuizzesByCategoryId(req.params.kategoriId);
    res.status(200).json({ data: quizzes });
  } catch (error) {
    next(error);
  }
};

const getQuizById = async (req, res, next) => {
  try {
    const quiz = await QuizService.getQuizById(req.params.id);
    if (!quiz) {
      return res.status(404).json({ message: 'Quiz not found' });
    }
    res.status(200).json({ data: quiz });
  } catch (error) {
    next(error);
  }
};

const deleteQuiz = async (req, res, next) => {
  try {
    const result = await QuizService.deleteQuiz(req.params.id);
    if (result) {
      res.status(200).json({ message: 'Quiz deleted successfully' });
    } else {
      res.status(404).json({ message: 'Quiz not found' });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createQuiz,
  getQuizzesByCategoryId,
  getQuizById,
  deleteQuiz,
};
