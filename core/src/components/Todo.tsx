import styled from '@emotion/styled';
import { TodoInfo } from 'src/types/types';

export const Todo = ({ todo, removeTodo, toggleTodo }: TodoProps) => {
  return (
    <S.Todo>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
      />
      <S.TodoText>{todo.title}</S.TodoText>
      <div>
        <S.Button data-testid="modify-button">수정</S.Button>
        <S.Button
          onClick={() => removeTodo(todo.id)}
          data-testid="delete-button"
        >
          삭제
        </S.Button>
      </div>
    </S.Todo>
  );
};

interface TodoProps {
  todo: TodoInfo;
  removeTodo: (id: string) => void;
  toggleTodo: (id: string) => void;
}

const S = {
  Todo: styled.li`
    display: flex;
    align-items: center;
    gap: 5px;
  `,

  TodoText: styled.span`
    margin-right: 10px;
  `,

  Button: styled.button`
    margin-right: 3px;
  `,
};
