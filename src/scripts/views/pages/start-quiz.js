import {
  createQuizItemTemplate,
} from '../templates/template-creator';
import QuizSource from '../../data/quiz-source';

const StartQuiz = {
  async render() {
    return `
        <div class="container mt-4">
          <h2 tabindex="0" class="fw-bold" style="text-align: center;">Select Quiz Category</h2>
          <div class="row" id="quizCategories"></div>
        </div>
      `;
  },

  async afterRender() {
    const quizCategoriesContainer = document.querySelector('#quizCategories');

    try {
      const categories = await QuizSource.getCategories();
      quizCategoriesContainer.innerHTML = categories.map(createQuizItemTemplate).join('');
    } catch (error) {
      console.error('Error displaying quiz categories:', error);
      quizCategoriesContainer.innerHTML = '<p>Error loading categories. Please try again later.</p>';
    }
  },
};

export default StartQuiz;
