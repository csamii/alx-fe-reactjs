import { create } from 'zustand';

const initialSettings = {
  categories: [],
  difficulty: 'all',
  type: 'both',
  numberOfQuestions: 10,
};

export const useQuizStore = create((set, get) => ({
  // Initial state
  settings: initialSettings,
  questions: [],
  currentQuestionIndex: 0,
  score: 0,
  timeRemaining: 60,
  isQuizActive: false,
  quizCompleted: false,
  correctionQuestions: [],
  correctionRounds: 0,
  startTime: 0,
  username: '',

  // Actions
  setSettings: (settings) => set({ settings }),

  setQuestions: (questions) => 
    set({ 
      questions: questions.map((q, index) => ({ ...q, originalIndex: index + 1 }))
    }),

  startQuiz: () => set({
    isQuizActive: true,
    currentQuestionIndex: 0,
    score: 0,
    timeRemaining: 60,
    startTime: Date.now(),
    quizCompleted: false,
  }),

  // answerQuestion: (answer, timeSpent) => {
  //   const state = get();
  //   const currentQuestion = state.questions[state.currentQuestionIndex];
  //   const isCorrect = answer === currentQuestion.correct_answer;
    
  //   const updatedQuestions = state.questions.map((q, index) =>
  //     index === state.currentQuestionIndex
  //       ? {
  //           ...q,
  //           isAnswered: true,
  //           userAnswer: answer,
  //           isCorrect,
  //           timeSpent,
  //         }
  //       : q
  //   );
    
  //   set({
  //     questions: updatedQuestions,
  //     score: isCorrect ? state.score + 1 : state.score,
  //   });
  // },

  // answerQuestion: (answer, timeSpent) => {
  //   const state = get();
  //   const currentQuestion = state.questions[state.currentQuestionIndex];
  //   const isCorrect = answer === currentQuestion.correct_answer;

  //   const updatedQuestion = {
  //     ...currentQuestion,
  //     isAnswered: true,
  //     userAnswer: answer,
  //     isCorrect,
  //     timeSpent,
  //   };

  //   const updatedQuestions = state.questions.map((q, index) =>
  //     index === state.currentQuestionIndex ? updatedQuestion : q
  //   );

  //   set({
  //     questions: updatedQuestions,
  //     score: isCorrect ? state.score + 1 : state.score,
  //     correctionQuestions: !isCorrect
  //       ? [...state.correctionQuestions, updatedQuestion] // ✅ push failed question
  //       : state.correctionQuestions,
  //   });
  // },
  answerQuestion: (answer, timeSpent) => {
    const state = get();
    const currentQuestion = state.questions[state.currentQuestionIndex];
    const isCorrect = answer === currentQuestion.correct_answer;

    const updatedQuestion = {
      ...currentQuestion,
      isAnswered: true,
      userAnswer: answer,
      isCorrect,
      timeSpent,
    };

    // Update the questions array
    const updatedQuestions = state.questions.map((q, index) =>
      index === state.currentQuestionIndex ? updatedQuestion : q
    );

    // If wrong or unanswered, add to correctionQuestions
    const updatedCorrections = isCorrect
      ? state.correctionQuestions
      : [...state.correctionQuestions, updatedQuestion];

    set({
      questions: updatedQuestions,
      score: isCorrect ? state.score + 1 : state.score,
      correctionQuestions: updatedCorrections,
    });
  },

  updateCorrectionQuestion: (originalIndex, userAnswer, isCorrect) =>
    set((state) => {
      const updatedCorrections = state.correctionQuestions.map((q) =>
        q.originalIndex === originalIndex
          ? { ...q, userAnswer, isCorrect, isAnswered: true }
          : q
      );
      return { correctionQuestions: updatedCorrections };
    }
  ),

  nextQuestion: () => {
    const state = get();
    set({
      currentQuestionIndex: state.currentQuestionIndex + 1,
      timeRemaining: 60,
    });
  },

  completeQuiz: () => {
    const state = get();
    const missedQuestions = state.questions.filter(q => !q.isAnswered || !q.isCorrect);
    
    set({
      isQuizActive: false,
      quizCompleted: true,
      correctionQuestions: missedQuestions,
    });
  },

  startCorrection: (questions) => set({
    correctionQuestions: questions,
    currentQuestionIndex: 0,
    isQuizActive: true,
    correctionRounds: get().correctionRounds + 1,
  }),

  completeCorrection: () => set({
    isQuizActive: false,
  }),

  resetQuiz: () => {
    const state = get();
    set({
      questions: [],
      currentQuestionIndex: 0,
      score: 0,
      timeRemaining: 60,
      isQuizActive: false,
      quizCompleted: false,
      correctionQuestions: [],
      correctionRounds: 0,
      startTime: 0,
      settings: state.settings,
      username: state.username,
    });
  },

  setTimeRemaining: (time) => set({ timeRemaining: time }),

  setUsername: (username) => set({ username }),
}));