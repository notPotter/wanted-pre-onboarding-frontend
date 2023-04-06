import styled from '@emotion/styled';

export function Todo() {
  return (
    <S.Container>
      <h1>Todo</h1>
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
