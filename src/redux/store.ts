import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './features/todo/todo-slice';
import counterReducer from './features/counter/counter-slice';
import quizReducer from './features/quiz/quiz-slice';

const store = configureStore({
  reducer: {
    todo: todoReducer,
    counter: counterReducer,
    quizzes: quizReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
