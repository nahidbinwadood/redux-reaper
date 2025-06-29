import { useAppSelector } from '@/redux/hook';
import QuizControls from './_components/quiz-controls';
import { setAnswer } from '@/redux/features/quiz/quiz-slice';

const HomePage = () => {
  const { quizData, currentQuestionIndex, answers } = useAppSelector(
    (state) => state.quizzes
  );

  const questions = quizData[currentQuestionIndex];

  return (
    <div className="max-w-lg mx-auto mt-20 p-8 rounded-2xl shadow-xl bg-white">
      <div className="mb-4 text-right text-sm text-gray-500">
        Question {currentQuestionIndex + 1} of {quizData.length}
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-6 leading-snug">
        {/* {question.question} */}
      </h3>
      <div className="space-y-3">
        {questions.options.map((option) => (
          <button
            key={option}
            onClick={() =>
              setAnswer({ questionId: questions.id, selectedOption: option })
            }
            className={`w-full px-4 py-2 rounded-md border text-sm font-medium transition-all duration-150

                ${
                  answers[currentQuestionIndex]?.selectedOption === option
                    ? 'bg-blue-600 text-white border-blue-600 shadow'
                    : 'bg-white text-gray-800 border-gray-300 hover:bg-gray-50'
                }`}
          >
            {option}
          </button>
        ))}
      </div>
      <QuizControls index={currentQuestionIndex} length={quizData.length} />
    </div>
  );
};

export default HomePage;
