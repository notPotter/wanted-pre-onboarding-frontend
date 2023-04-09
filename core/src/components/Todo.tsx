import styled from '@emotion/styled';
import { useState } from 'react';
import { TodoEdit, TodoInfo } from 'src/types/types';

export const Todo = ({ todo, editTodo, removeTodo }: TodoProps) => {
  const [editMode, setEditMode] = useState(false);
  const [editedTodo, setEditedTodo] = useState(todo.todo);

  return (
    <S.Todo>
      <input
        type="checkbox"
        checked={todo.isCompleted}
        onChange={() =>
          editTodo(todo.id, { todo: todo.todo, isCompleted: !todo.isCompleted })
        }
      />
      {editMode === false && (
        <>
          <S.TodoText>{todo.todo}</S.TodoText>
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
                editTodo(todo.id, {
                  todo: editedTodo,
                  isCompleted: todo.isCompleted,
                });
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
  editTodo: (id: string, todo: TodoEdit) => void;
  removeTodo: (id: string) => void;
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
