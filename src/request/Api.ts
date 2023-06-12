import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://www.pre-onboarding-selection-task.shop',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const signUp = async (email: string, password: string) => {
  const data = {
    email,
    password,
  };
  try {
    const response = await instance.post(`/auth/signup`, data);
    return response;
  } catch (error) {
    console.log('signUp:', error);
    return undefined;
  }
};

export const signIn = async (email: string, password: string) => {
  const data = {
    email,
    password,
  };
  try {
    const response = await instance.post(`/auth/signin`, data);
    return response;
  } catch (error) {
    console.log('signIn', error);
    return undefined;
  }
};

export const createTodo = async (todo: string) => {
  const accessToken = localStorage.getItem('access_token');
  const headers = {
    Authorization: `Bearer ${accessToken}`,
    'Content-Type': 'application/json',
  };
  const data = {
    todo,
  };
  try {
    const response = await instance.post('/todos', data, { headers });
    return response;
  } catch (error) {
    console.log('createTodo:', error);
  }
};

export const getTodos = async () => {
  const accessToken = localStorage.getItem('access_token');
  const headers = {
    Authorization: `Bearer ${accessToken}`,
    'Content-Type': 'application/json',
  };
  try {
    const response = await instance.get('/todos', { headers });
    return response;
  } catch (error) {
    console.log('getTodos:', error);
  }
};

export const updateTodo = async (
  id: number,
  todo: string,
  isCompleted: boolean,
) => {
  const accessToken = localStorage.getItem('access_token');
  const headers = {
    Authorization: `Bearer ${accessToken}`,
    'Content-Type': 'application/json',
  };
  const data = {
    todo,
    isCompleted,
  };
  try {
    const response = await instance.put(`/todos/${id}`, data, { headers });
    return response;
  } catch (error) {
    console.log('updateTodo:', error);
  }
};

export const deleteTodo = async (id: number) => {
  const accessToken = localStorage.getItem('access_token');
  const headers = {
    Authorization: `Bearer ${accessToken}`,
    'Content-Type': 'application/json',
  };
  try {
    const response = await instance.delete(`/todos/${id}`, { headers });
    return response;
  } catch (error) {
    console.log('deleteTodo:', error);
  }
};
