import { useEffect, useState } from 'react';
import { TodoInfo } from 'src/types/types';

export const useTodos = () => {
  const [todos, setTodos] = useState<TodoInfo[]>(
    localStorage.getItem('todos')
      ? JSON.parse(localStorage.getItem('todos')!)
      : [],
  );

  const addTodo = (todo: TodoInfo) => {
    const newTodos = [...todos, todo];
    setTodos(newTodos);
  };

  const removeTodo = (id: string) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const editTodo = (id: string, title: string) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, title };
      }
      return todo;
    });

    setTodos(newTodos);
  };

  const toggleTodo = (id: string) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return { todos, addTodo, editTodo, removeTodo, toggleTodo };
};
