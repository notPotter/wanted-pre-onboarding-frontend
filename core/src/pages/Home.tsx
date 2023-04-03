import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';

export function Home() {
  const navigate = useNavigate();

  return (
    <S.Container>
      <h1>Home</h1>
      <button onClick={() => navigate('/signup')}>Sign Up</button>
      <button onClick={() => navigate('/signin')}>Login</button>
    </S.Container>
  );
}

const S = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
  `,
};
