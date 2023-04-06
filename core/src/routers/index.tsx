import { Home } from 'src/pages/Home';
import { SignIn } from 'src/pages/SignIn';
import { SignUp } from 'src/pages/SignUp';
import { Todo } from 'src/pages/Todo';

export const router = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/todo',
    element: <Todo />,
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
