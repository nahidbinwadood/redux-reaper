import { quizQuestions } from '@/data';
import type { QuizState } from '@/types';
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

const initialState: QuizState = {
  quizData: quizQuestions,
  currentQuestionIndex: 2,
  answers: [],
};

const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    setCurrentQuestionIndex: (state, action: PayloadAction<string>) => {
      if (action.payload == 'next') {
        if (state.currentQuestionIndex < state.quizData.length - 1) {
          state.currentQuestionIndex += 1;
        }
      } else if (action.payload == 'prev') {
        if (state.currentQuestionIndex > 0) {
          state.currentQuestionIndex -= 1;
        }
      }
    },
    setAnswer: (state, action) => {
      console.log(action.payload);
      const { questionId, selectedOption } = action.payload;
      state.answers.push({ questionId, selectedOption });
    },
  },
});

export const { setCurrentQuestionIndex, setAnswer } = quizSlice.actions;
export default quizSlice.reducer;
