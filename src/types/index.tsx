export type NavItems = {
  name: string;
  path: string;
};

export interface QuizQuestions {
  id: string;
  question: string;
  options: string[];
  correctAnswer: string;
}

export interface IAnswer {
  questionId: string;
  selectedOption: string;
}

export interface QuizState {
  quizData: QuizQuestions[];
  currentQuestionIndex: number;
  answers: IAnswer[];
}
