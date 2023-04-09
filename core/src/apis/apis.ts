import axios from 'axios';
import { API_URL } from 'src/constants/constants';
import { TodoEdit, UserInfo } from 'src/types/types';

export const requestSignUp = async (signUpInfo: UserInfo) => {
  return await axios.post(`${API_URL}auth/signup`, signUpInfo);
};

export const requestSignIn = async (signInInfo: UserInfo) => {
  return await axios.post(`${API_URL}auth/signin`, signInInfo);
};

export const requestCreateTodo = async (todo: string, accessToken: string) => {
  return await axios.post(
    `${API_URL}todos`,
    { todo },
    { headers: { Authorization: `Bearer ${accessToken}` } },
  );
};

export const requestGetTodos = async (accessToken: string) => {
  return await axios.get(`${API_URL}todos`, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
};

export const requestUpdateTodo = async (
  id: string,
  todo: TodoEdit,
  accessToken: string,
) => {
  return await axios.put(`${API_URL}todos/${id}`, todo, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
};

export const requestDeleteTodo = async (id: string, accessToken: string) => {
  return await axios.delete(`${API_URL}todos/${id}`, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
};
