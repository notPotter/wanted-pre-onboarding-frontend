/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

export function Auth() {
  const navigate = useNavigate();
  const accessToken = localStorage.getItem('accessToken');

  useEffect(() => {
    if (accessToken && accessToken !== 'undefined') {
      navigate('/todo', { replace: true });
    } else if (
      window.location.pathname === '/todo' &&
      (!accessToken || accessToken === 'undefined')
    ) {
      navigate('/signin', { replace: true });
    }
  }, [navigate]);

  if (!navigate) return <h1>Loading</h1>;

  return <Outlet />;
}
