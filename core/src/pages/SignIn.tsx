import styled from '@emotion/styled';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { requestSignIn } from 'src/apis/apis';
import { INITIAL_VALUES } from 'src/constants/constants';
import { useForm } from 'src/hooks/useForm';
import { validateEmail, validatePassword } from 'src/utils/validate';

export function SignIn() {
  const navigate = useNavigate();
  const { valuesDone, handleChangeInput, handleSubmitForm } = useForm({
    initialValues: INITIAL_VALUES,
    submitHandler: async (values) => {
      const res = await requestSignIn(values);

      if (res.status === 200) {
        localStorage.setItem('accessToken', res.data.accessToken);
        navigate('/todo', { replace: true });
      }
    },
  });

  useEffect(() => {
    if (localStorage.getItem('accessToken')) {
      navigate('/todo', { replace: true });
    }
  }, [navigate]);

  return (
    <S.Container>
      <h1>SignIn</h1>
      <S.Form onSubmit={handleSubmitForm}>
        <S.Input
          type="text"
          name="email"
          placeholder="Email"
          onChange={handleChangeInput(validateEmail)}
          data-testid="email-input"
        />
        <S.Input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChangeInput(validatePassword)}
          data-testid="password-input"
        />
        <S.Button
          type="submit"
          disabled={!valuesDone}
          data-testid="signin-button"
        >
          Sign Up
        </S.Button>
      </S.Form>
    </S.Container>
  );
}

const S = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `,

  Form: styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
  `,

  Input: styled.input``,

  Button: styled.button``,
};
