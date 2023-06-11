import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TodoCreate from "../components/todo/TodoCreate";
import { getTodos } from "../request/Api";
import TodoList from "../components/todo/TodoList";

export interface TodoListData {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: number;
}

const Todo = () => {
  const [todoText, setTodoText] = useState<string>("");
  const [todoList, setTodoList] = useState<TodoListData[]>([]);
  const navigate = useNavigate();
  const access_token = localStorage.getItem("access_token");

  const handleTodoChange: (value: string) => void = useCallback((value) => {
    setTodoText(value);
  }, []);

  const handleOnTodoCreate: (value: TodoListData) => void = useCallback(
    (value) => {
      setTodoList([...todoList, value]);
    },
    [todoList]
  );

  const handleOnTodoDelete: (value: TodoListData[]) => void = useCallback(
    (value) => {
      setTodoList([...value]);
    },
    [todoList]
  );

  useEffect(() => {
    if (!access_token) {
      navigate("/login");
    }
  }, [access_token, navigate]);

  useEffect(() => {
    const getTodoList = async () => {
      try {
        const response = await getTodos();
        setTodoList(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getTodoList();
  }, []);

  return (
    <div>
      <div>Todo 페이지</div>
      <TodoCreate
        onChange={handleTodoChange}
        todo={todoText}
        onTodoCreate={handleOnTodoCreate}
      />
      <div>
        <ul>
          <TodoList todolist={todoList} onTodoDelete={handleOnTodoDelete} />
        </ul>
      </div>
    </div>
  );
};

export default Todo;
