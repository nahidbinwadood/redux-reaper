import Footer from '@/components/shared/footer';
import Header from '@/components/shared/header';
import { Outlet } from 'react-router';

const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
