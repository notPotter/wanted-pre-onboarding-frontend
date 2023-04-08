import styled from '@emotion/styled';
import { useState } from 'react';
import { TodoInfo } from 'src/types/types';

export const Todo = ({ todo, editTodo, removeTodo, toggleTodo }: TodoProps) => {
  const [editMode, setEditMode] = useState(false);
  const [editedTodo, setEditedTodo] = useState(todo.title);

  return (
    <S.Todo>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
      />
      {editMode === false && (
        <>
          <S.TodoText>{todo.title}</S.TodoText>
          <div>
            <S.Button
              onClick={() => setEditMode(true)}
              data-testid="modify-button"
            >
              수정
            </S.Button>
            <S.Button
              onClick={() => removeTodo(todo.id)}
              data-testid="delete-button"
            >
              삭제
            </S.Button>
          </div>
        </>
      )}
      {editMode === true && (
        <>
          <input
            value={editedTodo}
            onChange={(e) => setEditedTodo(e.target.value)}
            data-testid="modify-input"
          />
          <div>
            <S.Button
              onClick={() => {
                setEditMode(false);
                editTodo(todo.id, editedTodo);
              }}
              data-testid="submit-button"
            >
              제출
            </S.Button>
            <S.Button
              onClick={() => setEditMode(false)}
              data-testid="cancel-button"
            >
              취소
            </S.Button>
          </div>
        </>
      )}
    </S.Todo>
  );
};

interface TodoProps {
  todo: TodoInfo;
  editTodo: (id: string, title: string) => void;
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
