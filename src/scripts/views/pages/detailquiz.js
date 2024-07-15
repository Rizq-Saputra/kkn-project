/* eslint-disable radix */
/* eslint-disable max-len */
import UrlParser from '../../routes/url-parser';
import QuizSource from '../../data/quiz-source';
import { createQuizDetailTemplate } from '../templates/template-creator';

const totalQuestions = 5;

const DetailQuiz = {
  async render() {
    return `
      <div class="container mt-4">
        <button id="backButton" class="btn btn-secondary mb-3">Back</button>
        <div class="row" id="quizzes"></div>
      </div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const quizzesContainer = document.querySelector('#quizzes');
    const backButton = document.querySelector('#backButton');

    backButton.addEventListener('click', () => {
      window.history.back();
    });

    try {
      await this.loadRandomQuiz(url.id);
    } catch (error) {
      console.error('Error fetching quizzes:', error);
      quizzesContainer.innerHTML = '<p>Error loading quizzes. Please try again later.</p>';
    }
  },

  async loadRandomQuiz(categoryId) {
    const quizzesContainer = document.querySelector('#quizzes');
    const quizzes = await QuizSource.getQuizzesByCategory(categoryId);
    const answeredQuestionIds = JSON.parse(localStorage.getItem('answeredQuestionIds')) || [];
    const remainingQuizzes = quizzes.filter((quiz) => !answeredQuestionIds.includes(quiz.id));

    if (remainingQuizzes.length === 0) {
      alert('No more new questions available in this category.');
      window.history.back();
      return;
    }

    const randomQuiz = remainingQuizzes[Math.floor(Math.random() * remainingQuizzes.length)];
    const answeredQuestions = parseInt(localStorage.getItem('answeredQuestions')) || 0;
    quizzesContainer.innerHTML = createQuizDetailTemplate(randomQuiz, answeredQuestions + 1, totalQuestions);
    this._addEventListeners(randomQuiz.id);
  },

  _addEventListeners(quizId) {
    const submitButton = document.querySelector('.submit-answer');

    submitButton.addEventListener('click', async (event) => {
      const { correctAnswer, point } = event.target.dataset;
      const selectedAnswer = document.querySelector(`input[name="quiz-${quizId}"]:checked`);

      console.log(`Point for this question: ${point}`);
      if (selectedAnswer) {
        let totalPoints = parseInt(localStorage.getItem('totalPoints')) || 0;
        if (selectedAnswer.value === correctAnswer) {
          totalPoints += parseInt(point, 10);
          localStorage.setItem('totalPoints', totalPoints);
          console.log(`Total Points after correct answer: ${totalPoints}`);
          alert('Correct!');
        } else {
          alert('Incorrect. Please try again.');
        }

        let answeredQuestions = parseInt(localStorage.getItem('answeredQuestions')) || 0;
        answeredQuestions += 1;
        localStorage.setItem('answeredQuestions', answeredQuestions);

        const answeredQuestionIds = JSON.parse(localStorage.getItem('answeredQuestionIds')) || [];
        answeredQuestionIds.push(quizId);
        localStorage.setItem('answeredQuestionIds', JSON.stringify(answeredQuestionIds));

        if (answeredQuestions < totalQuestions) {
          window.location.hash = '#/start-quiz';
        } else {
          window.location.hash = '#/quiz';
          setTimeout(() => {
            alert(`Quiz completed! Your total score is: ${totalPoints}`);
            localStorage.removeItem('answeredQuestions');
            localStorage.removeItem('totalPoints');
            localStorage.removeItem('answeredQuestionIds');
          }, 100);
        }
      } else {
        alert('Please select an answer.');
      }
    });
  },
};

export default DetailQuiz;
