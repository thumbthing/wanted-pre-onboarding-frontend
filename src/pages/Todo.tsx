import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TodoCreate from "../components/todo/TodoCreate";
import { getTodos } from "../request/Api";

interface TodoListData {
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
        console.log(todoList);
      } catch (error) {
        console.log(error);
      }
    };
    getTodoList();
  }, []);

  return (
    <div>
      <div>Todo 페이지</div>
      <TodoCreate onChange={handleTodoChange} todo={todoText} />
      <div>
        <ul>
          <li>
            <label>
              <input type='checkbox' />
              <span>todo 1</span>
              <input type='button' data-testid='modify-button' value={"수정"} />
              <input type='button' data-testid='delete-button' value={"삭제"} />
            </label>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Todo;
