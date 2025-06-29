import MainLayout from '@/layouts/MainLayout';
import HomePage from '@/pages/homepage';
import { createBrowserRouter } from 'react-router';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'login',
        element: <div>Login Page</div>,
      },
    ],
  },
]);

export default router;
