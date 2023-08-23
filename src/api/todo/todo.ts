import instance from "../instance";

interface TodoProps {
  id: number;
  todo: string;
  isCompleted?: boolean;
}

export const createTodo = async (todo: string) => {
  const data = { todo };

  try {
    const request = await instance.post("/todos", data);
    return request;
  } catch (error) {
    console.log("create todo error : ", error);
  }
};

export const getTodos = async () => {
  try {
    const response = await instance.get("/todos");
    return response;
  } catch (error) {
    console.log("get Todo list Error : ", error);
  }
};

export const updateTodo = async (
  id: number,
  todo: string,
  isCompleted: boolean
) => {
  const data = {
    todo: todo,
    isCompleted: isCompleted,
  };
  try {
    const response = await instance.put(`/todos/${id}`, data);
    return response;
  } catch (error) {
    console.log("update todo error : ", error);
  }
};

export const deleteTodo = async (id: number) => {
  try {
    const response = await instance.delete(`/todos/${id}`);
    return response;
  } catch (error) {
    console.log("delete todo error : ", error);
  }
};
