import { useState } from 'react';
import { TodoInfo } from 'src/types/types';

export const useTodos = () => {
  const [todos, setTodos] = useState<TodoInfo[]>([]);

  const addTodo = (todo: TodoInfo) => {
    const newTodos = [...todos, todo];
    setTodos(newTodos);
  };

  const removeTodo = (id: string) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
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

  return { todos, addTodo, removeTodo, toggleTodo };
};
