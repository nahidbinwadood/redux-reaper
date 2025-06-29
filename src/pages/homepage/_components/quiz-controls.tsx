import { setCurrentQuestionIndex } from '@/redux/features/quiz/quiz-slice';
import { useAppDispatch } from '@/redux/hook';

const QuizControls = ({ index, length }: { index: number; length: number }) => {
  const dispatch = useAppDispatch();
  return (
    <div className="mt-6 flex justify-between">
      <button
        onClick={() => dispatch(setCurrentQuestionIndex('prev'))}
        disabled={index === 0}
        className="px-5 py-2 bg-gray-600 text-white rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Previous
      </button>
      <button
        onClick={() => dispatch(setCurrentQuestionIndex('next'))}
        disabled={index === length - 1}
        className="px-5 py-2 bg-black text-white rounded-md hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {index === length - 1 ? 'Finish' : 'Next'}
      </button>
    </div>
  );
};

export default QuizControls;
