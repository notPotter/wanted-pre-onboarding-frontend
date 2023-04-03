import { Home } from 'src/pages/Home';
import { SignIn } from 'src/pages/SignIn';
import { SignUp } from 'src/pages/SignUp';

export const router = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/signup',
    element: <SignUp />,
  },
  {
    path: '/signin',
    element: <SignIn />,
  },
];
