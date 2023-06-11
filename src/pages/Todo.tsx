import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TodoCreate from "../components/todo/TodoCreate";
import { getTodos } from "../request/Api";
import TodoList from "../components/todo/TodoList";
import { styled } from "styled-components";

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

  const handleGetNewTodoList: (value: TodoListData[]) => void = useCallback(
    (value) => {
      setTodoList([...value]);
    },
    []
  );

  if (!access_token) {
    navigate("/login");
  }

  useEffect(() => {
    const getTodoList = async () => {
      try {
        const response = await getTodos();
        setTodoList(response?.data);
      } catch (error) {
        console.log(error);
      }
    };
    getTodoList();
  }, []);

  return (
    <TodoContainer>
      <TodoHeader onClick={() => navigate("/")}>
        <h1>Todo 페이지</h1>
        <button onClick={() => navigate("/")}>메인으로</button>
      </TodoHeader>
      <TodoCreate
        onChange={handleTodoChange}
        todo={todoText}
        onTodoCreate={handleOnTodoCreate}
      />
      <div>
        <TodoList todolist={todoList} onGetNewTodoList={handleGetNewTodoList} />
      </div>
    </TodoContainer>
  );
};

const TodoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const TodoHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  button {
    display: flex;
    justify-content: center;
    margin: auto;
    width: 40px;
    height: 40px;
  }
`;

export default Todo;
