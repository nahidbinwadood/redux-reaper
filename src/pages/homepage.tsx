import { useAppSelector } from '@/redux/hook';

const HomePage = () => {
  const todo = useAppSelector((state) => state.todo.todo);
  console.log(todo);
  return (
    <div>
      <h1>hello from homepage</h1>
    </div>
  );
};

export default HomePage;
