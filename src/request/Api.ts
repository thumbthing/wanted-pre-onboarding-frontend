import axios, { AxiosResponse } from "axios";

const instance = axios.create({
  baseURL: "https://www.pre-onboarding-selection-task.shop",
  headers: {
    "Content-Type": "application/json",
  },
});

export const sign = async (
  email: string,
  password: string,
  request: string
) => {
  const data = {
    email,
    password,
  };
  try {
    const response = await instance.post(`/auth/${request}`, data);
    return response;
  } catch (error) {
    console.log(error);
    return undefined;
  }
};

export const createTodo = async (todo: string) => {
  const accessToken = localStorage.getItem("access_token");
  const headers = {
    Authorization: `Bearer ${accessToken}`,
    "Content-Type": "application/json",
  };
  const data = {
    todo,
  };
  try {
    const response = await instance.post("/todos", data, { headers });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getTodos = async () => {
  const accessToken = localStorage.getItem("access_token");
  const headers = {
    Authorization: `Bearer ${accessToken}`,
    "Content-Type": "application/json",
  };
  try {
    const response = await instance.get("/todos", { headers });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const updateTodo = async (
  id: number,
  todo: string,
  isCompleted: boolean
) => {
  const accessToken = localStorage.getItem("access_token");
  const headers = {
    Authorization: `Bearer ${accessToken}`,
    "Content-Type": "application/json",
  };
  const data = {
    todo,
    isCompleted,
  };
  try {
    const response = await instance.put(`/todos/${id}`, data, { headers });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const deleteTodo = async (id: number) => {
  const accessToken = localStorage.getItem("access_token");
  const headers = {
    Authorization: `Bearer ${accessToken}`,
    "Content-Type": "application/json",
  };
  try {
    const response = await instance.delete(`/todos/${id}`, { headers });
    return response;
  } catch (error) {
    console.log(error);
  }
};

// export const deleteTodo = async (id: number): Promise<AxiosResponse> => {
//   const url = `https://www.pre-onboarding-selection-task.shop/todos/${id}`;
//   const access_token = localStorage.getItem("access_token");
//   const headers = {
//     Authorization: `Bearer ${access_token}`,
//   };
//   try {
//     const response = await axios.delete(url, { headers });
//     return response;
//   } catch (error) {
//     throw error;
//   }
// };
