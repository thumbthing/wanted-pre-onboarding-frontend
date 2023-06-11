import axios, { AxiosResponse } from "axios";

interface SignRequestBody {
  email: string;
  password: string;
  request: string;
}

export const Sign = async (
  email: string,
  password: string,
  request: string
): Promise<AxiosResponse> => {
  const url = `https://www.pre-onboarding-selection-task.shop/auth/${request}`;
  const headers = {
    "Content-Type": "application/json",
  };
  const body = {
    email,
    password,
  };
  try {
    const response = await axios.post(url, body, { headers });
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const createTodo = async (todo: string): Promise<AxiosResponse> => {
  const url = `https://www.pre-onboarding-selection-task.shop/todos`;
  const access_token = localStorage.getItem("access_token");
  const headers = {
    Authorization: `Bearer ${access_token}`,
    "Content-Type": "application/json",
  };
  const body = {
    todo: todo,
  };

  try {
    const response = await axios.post(url, body, { headers });
    return response;
  } catch (error) {
    throw error;
  }
};

export const getTodos = async (): Promise<AxiosResponse> => {
  const url = `https://www.pre-onboarding-selection-task.shop/todos`;
  const access_token = localStorage.getItem("access_token");
  const headers = {
    Authorization: `Bearer ${access_token}`,
  };
  try {
    const response = await axios.get(url, { headers });
    return response;
  } catch (error) {
    throw error;
  }
};

export const updateTodo = async (
  id: number,
  todo: string,
  isCompleted: boolean
): Promise<AxiosResponse> => {
  const url = `https://www.pre-onboarding-selection-task.shop/todos/${id}`;
  const access_token = localStorage.getItem("access_token");
  const headers = {
    Authorization: `Bearer ${access_token}`,
    "Content-Type": "application/json",
  };
  const body = {
    todo: todo,
    isCompleted: isCompleted,
  };
  try {
    const response = axios.put(url, body, { headers });
    return response;
  } catch (error) {
    throw error;
  }
};

export const deleteTodo = async (id: number): Promise<AxiosResponse> => {
  const url = `https://www.pre-onboarding-selection-task.shop/todos/${id}`;
  const access_token = localStorage.getItem("access_token");
  const headers = {
    Authorization: `Bearer ${access_token}`,
  };
  try {
    const response = await axios.delete(url, { headers });
    return response;
  } catch (error) {
    throw error;
  }
};
