import {
  createQuizItemTemplate,
} from '../templates/template-creator';
import QuizSource from '../../data/quiz-source';

const Quiz = {
  async render() {
    return `
      <h1 tabindex="0" class="fw-bold mt-4" style="text-align: center;">Quiz</h1>
      <div class="container mt-4">
        <div class="row" id="quiz"></div>
      </div>
    `;
  },

  async afterRender() {
    const quizContainer = document.querySelector('#quiz');
    try {
      const categories = await QuizSource.getCategories();
      categories.forEach((category) => {
        quizContainer.innerHTML += createQuizItemTemplate(category);
      });
    } catch (error) {
      console.error('Error displaying quiz categories:', error);
    }
  },
};

export default Quiz;
