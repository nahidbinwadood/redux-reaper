import { useAppSelector } from '@/redux/hook';

const HomePage = () => {
  const counter = useAppSelector((state) => state.counter.count);
  console.log(counter);
  return (
    <div>
      <h1>hello from homepage</h1>
    </div>
  );
};

export default HomePage;
