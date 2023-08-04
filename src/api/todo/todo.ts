import instance from "../instance";

interface TodoProps {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: number;
}

export const createTodo = async (todo: string) => {
  const data = {
    todo,
  };

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
