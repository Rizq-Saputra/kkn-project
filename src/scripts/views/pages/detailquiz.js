import UrlParser from '../../routes/url-parser';
import QuizSource from '../../data/quiz-source';
import { createQuizDetailTemplate } from '../templates/template-creator';

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
      const quizzes = await QuizSource.getQuizzesByCategory(url.id);
      if (quizzes.length === 0) {
        quizzesContainer.innerHTML = '<p>No quizzes found for this category.</p>';
      } else {
        quizzesContainer.innerHTML = quizzes.map(createQuizDetailTemplate).join('');
      }

      this._addEventListeners();
    } catch (error) {
      console.error('Error fetching quizzes:', error);
      quizzesContainer.innerHTML = '<p>Error loading quizzes. Please try again later.</p>';
    }
  },

  _addEventListeners() {
    const submitButtons = document.querySelectorAll('.submit-answer');
    submitButtons.forEach((button) => {
      button.addEventListener('click', (event) => {
        const { quizId } = event.target.dataset;
        const { correctAnswer } = event.target.dataset;
        const selectedAnswer = document.querySelector(`input[name="quiz-${quizId}"]:checked`);

        if (selectedAnswer) {
          if (selectedAnswer.value === correctAnswer) {
            alert(`Correct! You earned ${event.target.dataset.point} points.`);
          } else {
            alert('Incorrect. Please try again.');
          }
        } else {
          alert('Please select an answer.');
        }
      });
    });
  },
};

export default DetailQuiz;
