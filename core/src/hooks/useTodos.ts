import { TodoEdit } from './../types/types';
import { useEffect, useState } from 'react';
import {
  requestCreateTodo,
  requestDeleteTodo,
  requestGetTodos,
  requestUpdateTodo,
} from 'src/apis/apis';
import { TodoInfo } from 'src/types/types';

export const useTodos = () => {
  const [todos, setTodos] = useState<TodoInfo[]>([]);
  const accessToken = localStorage.getItem('accessToken');

  const addTodo = async (todo: string) => {
    await requestCreateTodo(todo, accessToken);
    await getTodos();
  };

  const getTodos = async () => {
    const res = await requestGetTodos(accessToken);
    setTodos(res.data);
  };

  const removeTodo = async (id: string) => {
    await requestDeleteTodo(id, accessToken);
    await getTodos();
  };

  const editTodo = async (id: string, todo: TodoEdit) => {
    console.log(todo);
    await requestUpdateTodo(id, todo, accessToken);
    await getTodos();
  };

  useEffect(() => {
    if (accessToken && accessToken !== 'undefined') {
      requestGetTodos(accessToken).then((res) => {
        setTodos(res.data);
      });
    }
  }, [accessToken]);

  return { todos, addTodo, editTodo, removeTodo };
};
