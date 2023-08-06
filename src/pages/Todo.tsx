import React, { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import TodoInput from "../components/todo/TodoInput";
import { deleteTodo, getTodos, updateTodo } from "../api/todo/todo";
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

  const handleAddTodo = useCallback((newTodo: TodosProps) => {
    setTodos((todos) => [...todos, newTodo]);
  }, []);

  const handleDeleteTodo = async (id: number) => {
    try {
      await deleteTodo(id);
      const deletedTodo = todos.filter((item) => item.id !== id);
      setTodos(deletedTodo);
    } catch (error) {
      console.log("delete todo error : ", error);
    }
  };
  return (
    <div>
      <TodoInput handleAddTodo={handleAddTodo} />
      <TodoList
        todos={todos}
        handleIsComplete={handleIsComplete}
        handleDeleteTodo={handleDeleteTodo}
      />
    </div>
  );
};

export default Todo;
