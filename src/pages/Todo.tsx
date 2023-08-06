import React, { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import TodoInput from "../components/todo/TodoInput";
import { getTodos, updateTodo } from "../api/todo/todo";
import TodoList from "../components/todo/TodoList";

export interface TodosProps {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId?: number;
}

const Todo = () => {
  const [accessToken] = useState(localStorage.getItem("access_token"));
  const [todos, setTodos] = useState<TodosProps[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getTodoList = async () => {
      try {
        const response = await getTodos();
        setTodos(response?.data);
      } catch (error) {
        console.log("get todo list error : ", error);
      }
    };

    if (!accessToken) {
      navigate("/signin");
    } else {
      getTodoList();
    }
  }, [accessToken, navigate]);

  const handleIsComplete = async ({ id, todo, isCompleted }: TodosProps) => {
    try {
      const response = await updateTodo(id, todo, !isCompleted);
      const updatedTodo = todos.map((item) =>
        item.id === response?.data.id ? { ...response?.data } : item
      );
      setTodos(updatedTodo);
    } catch (error) {
      console.log("isComplete error : ", error);
    }
  };

  const handelAddTodo = useCallback((newTodo: TodosProps) => {
    setTodos((todos) => [...todos, newTodo]);
  }, []);

  return (
    <div>
      <TodoInput handleAddTodo={handelAddTodo} />
      <TodoList todos={todos} handleIsComplete={handleIsComplete} />
    </div>
  );
};

export default Todo;
