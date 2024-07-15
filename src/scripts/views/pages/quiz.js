/* eslint-disable no-unused-vars */
import {
  createQuizItemTemplate,
} from '../templates/template-creator';
import QuizSource from '../../data/quiz-source';

const Quiz = {
  async render() {
    return `
      <h1 tabindex="0" class="fw-bold mt-4" style="text-align: center;">Quiz</h1>
      <div class="container mt-4">
        <div id="startQuizContainer" class="d-flex justify-content-center flex-column align-items-center">
          <img src="/images/question.png" alt="Quiz illustration" style="max-width: 100%; height: auto;">
          <button id="startQuizButton" class="btn btn-custom mb-3">Start Quiz</button>
        </div>
      </div>
    `;
  },

  async afterRender() {
    const startQuizButton = document.querySelector('#startQuizButton');

    startQuizButton.addEventListener('click', () => {
      window.location.hash = '#/start-quiz';
    });

    const resetQuiz = () => {
      localStorage.removeItem('answeredQuestions');
      localStorage.removeItem('totalPoints');
      localStorage.removeItem('answeredQuestionIds');
    };

    resetQuiz();
  },
};

export default Quiz;
