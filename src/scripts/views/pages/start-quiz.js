/* eslint-disable max-len */
/* eslint-disable no-use-before-define */
import QuizSource from '../../data/quiz-source';
import { createQuizDetailTemplate } from '../templates/template-creator';

const StartQuiz = {
  async render() {
    return `
      <div class="container mt-4">
        <h2 tabindex="0" class="fw-bold" style="text-align: center;">Quiz Question</h2>
        <div id="quizStatus" class="mt-2" style="text-align: center;"></div>
        <div id="quizTimer" class="mt-2" style="text-align: center;"></div>
        <div id="quizQuestion" class="mt-4 justify-content-center d-flex"></div>
        <button id="submitButton" class="btn btn-primary mt-4" style="display: none;">Submit</button>
        <div id="backButtonContainer" class="mt-4" style="text-align: center;"></div>
      </div>
    `;
  },

  async afterRender() {
    const quizStatusContainer = document.querySelector('#quizStatus');
    const quizTimerContainer = document.querySelector('#quizTimer');
    const quizQuestionContainer = document.querySelector('#quizQuestion');
    const submitButton = document.querySelector('#submitButton');
    const backButtonContainer = document.querySelector('#backButtonContainer');

    const totalQuestions = 5;
    let currentQuestion = 0;
    const answeredQuestions = new Map();
    const questions = [];
    const displayedQuestions = []; // Array to store displayed questions
    // Timer setup
    const totalTime = 5 * 30;
    let timeLeft = totalTime;

    const quizMusic = new Audio('../music/quiz.mp3');

    const fetchAndDisplayRandomQuestions = async () => {
      try {
        const quizzes = await QuizSource.getAllQuizzes();
        questions.push(...quizzes);
        questions.sort(() => Math.random() - 0.5);
        fetchAndDisplayQuestion();
        quizMusic.play();
      } catch (error) {
        quizQuestionContainer.innerHTML = '<p>Error loading quiz question. Please try again later.</p>';
      }
    };

    const fetchAndDisplayQuestion = () => {
      if (currentQuestion < totalQuestions) {
        const quiz = questions[currentQuestion];
        displayedQuestions.push(quiz); // Add the current question to the displayed questions
        quizStatusContainer.innerHTML = `<p>Question ${currentQuestion + 1}/${totalQuestions}</p>`;
        quizQuestionContainer.innerHTML = createQuizDetailTemplate(quiz, currentQuestion + 1, totalQuestions);

        document.querySelector('.next-question').addEventListener('click', nextQuestion);
        document.querySelector('.prev-question').addEventListener('click', prevQuestion);

        if (answeredQuestions.has(quiz.id)) {
          const selectedAnswer = answeredQuestions.get(quiz.id).answer;
          if (selectedAnswer) {
            document.querySelector(`input[value="${selectedAnswer}"]`).checked = true;
          }
        }
      }
    };

    const nextQuestion = () => {
      const quiz = questions[currentQuestion];
      const selectedAnswer = document.querySelector(`input[name="quiz-${quiz.id}"]:checked`);

      if (selectedAnswer) {
        answeredQuestions.set(quiz.id, {
          answer: selectedAnswer.value,
          isCorrect: selectedAnswer.value === quiz.jawabanBenar,
          points: parseInt(selectedAnswer.dataset.point, 10),
        });
      }

      if (currentQuestion < totalQuestions - 1) {
        currentQuestion += 1;
        fetchAndDisplayQuestion();
      } else {
        clearInterval(timerInterval);
        endQuiz();
      }
    };

    const prevQuestion = () => {
      if (currentQuestion > 0) {
        currentQuestion -= 1;
        fetchAndDisplayQuestion();
      }
    };

    const endQuiz = () => {
      submitButton.disabled = true;
      quizStatusContainer.innerHTML = '';
      quizMusic.pause(); // Stop the music when the quiz ends
      quizMusic.currentTime = 0; // Reset the music to the beginning
      let score = 0;
      answeredQuestions.forEach((value) => {
        if (value.isCorrect) {
          score += value.points;
        }
      });

      let message = '';
      let imageUrl = '';
      if (score === totalQuestions) {
        message = 'Great job!';
        imageUrl = '../images/good.png';
      } else if (score >= 3) {
        message = 'Nice!';
        imageUrl = '../images/nice.png';
      } else {
        message = 'Try again!';
        imageUrl = '../images/tryagain.png';
      }

      const quizResults = displayedQuestions.map((quiz, index) => {
        const userAnswer = answeredQuestions.get(quiz.id)?.answer || 'No answer';
        const correctAnswer = quiz.jawabanBenar;
        const isCorrect = userAnswer === correctAnswer;
        return `
          <div class="quiz-result-card card p-3 my-3 ${isCorrect ? 'border-success' : 'border-danger'}">
            <h4>Question ${index + 1}: ${quiz.soal}</h4>
            <p>Your answer: <span class="${isCorrect ? 'text-success' : 'text-danger'}">${userAnswer}</span></p>
            <p>Correct answer: <span class="text-success">${correctAnswer}</span></p>
          </div>
        `;
      }).join('');

      // Add the CSS styles
      const styleElement = document.createElement('style');
      styleElement.textContent = `
        .quiz-result-card {
          border-width: 2px;
        }
        .border-success {
          border-color: green !important;
        }
        .border-danger {
          border-color: red !important;
        }
        .text-success {
          color: green !important;
        }
        .text-danger {
          color: red !important;
        }
      `;
      document.head.appendChild(styleElement);

      quizQuestionContainer.innerHTML = `
        <div style="text-align: center;">
          <img src="${imageUrl}" alt="" style="display: block; margin: 0 auto;">
          <p>Time's up! You have completed the quiz.</p>
          <p>Your score: ${score} out of ${totalQuestions}</p>
          <p>${message}</p>
          ${quizResults}
        </div>
      `;

      backButtonContainer.innerHTML = '<button id="backButton" class="btn btn-custom mt-4 mb-4">Back to Quiz</button>';

      const backButton = document.querySelector('#backButton');
      if (backButton) {
        backButton.addEventListener('click', () => {
          window.location.hash = '#/quiz';
        });
      }
    };

    const updateTimer = () => {
      if (timeLeft <= 0) {
        endQuiz();
      } else {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        quizTimerContainer.innerHTML = `<p>Time left: ${minutes}:${seconds < 10 ? `0${seconds}` : seconds}</p>`;
        timeLeft -= 1;
      }
    };

    // Start the timer
    const timerInterval = setInterval(updateTimer, 1000);
    updateTimer();

    await fetchAndDisplayRandomQuestions();

    submitButton.addEventListener('click', () => {
      clearInterval(timerInterval);
      endQuiz();
    });
  },
};

export default StartQuiz;
