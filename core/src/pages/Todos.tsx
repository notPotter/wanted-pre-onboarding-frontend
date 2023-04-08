import styled from '@emotion/styled';
import { useState } from 'react';
import { Todo } from 'src/components/Todo';
import { useTodos } from 'src/hooks/useTodos';

export function Todos() {
  const { todos, addTodo, editTodo, removeTodo, toggleTodo } = useTodos();
  const [todo, setTodo] = useState('');

  const handleSubmitTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTodo({
      ...todos,
      id: String(todos.length + 1),
      title: todo,
      completed: false,
    });
    setTodo('');
  };

  return (
    <S.Container>
      <h1>Todo</h1>
      <S.Form onSubmit={handleSubmitTodo}>
        <S.Input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          data-testid="new-todo-input"
        />
        <S.Button data-testid="new-todo-add-button">추가</S.Button>
      </S.Form>
      <S.TodoContainer>
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            editTodo={editTodo}
            removeTodo={removeTodo}
            toggleTodo={toggleTodo}
          />
        ))}
      </S.TodoContainer>
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

  Form: styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  `,

  Input: styled.input``,

  Button: styled.button``,

  TodoContainer: styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 0;
  `,
};
