/* eslint-disable no-undef */
/* eslint-disable consistent-return */
/* eslint-disable no-alert */
import API_ENDPOINT from '../globals/api-endpoint';

class QuizSource {
  static async getCategories() {
    try {
      const response = await fetch(API_ENDPOINT.CATEGORIES);
      const responseJson = await response.json();
      return responseJson.data;
    } catch (error) {
      console.error('Failed to fetch categories:', error);
      import('sweetalert2').then((Swal) => {
        Swal.default.fire({
          icon: 'error',
          title: 'Error loading categories. Please try again later!',
          showConfirmButton: false,
          timer: 1500,
        });
      });
    }
  }

  static async getQuizzesByCategory(categoryId) {
    try {
      const response = await fetch(API_ENDPOINT.QUIZ_BY_CATEGORY(categoryId));
      const responseJson = await response.json();
      return responseJson.data;
    } catch (error) {
      console.error('Failed to fetch quizzes by category:', error);
      import('sweetalert2').then((Swal) => {
        Swal.default.fire({
          icon: 'error',
          title: 'Error loading quizzes. Please try again later.',
          showConfirmButton: false,
          timer: 1500,
        });
      });
    }
  }
}

export default QuizSource;
