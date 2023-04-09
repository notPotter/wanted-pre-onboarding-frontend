import { Home } from 'src/pages/Home';
import { SignIn } from 'src/pages/SignIn';
import { SignUp } from 'src/pages/SignUp';
import { Todos } from 'src/pages/Todos';
import { Auth } from 'src/routers/Auth';

export const router = [
  {
    element: <Auth />,
    children: [
      {
        path: '/signup',
        element: <SignUp />,
      },
      {
        path: '/signin',
        element: <SignIn />,
      },
      {
        path: '/todo',
        element: <Todos />,
      },
    ],
  },
  {
    path: '/',
    element: <Home />,
  },
];
