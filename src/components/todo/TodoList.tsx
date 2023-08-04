import React, { useEffect, useState } from "react";
import { getTodos } from "../../api/todo/todo";

interface TodoListProps {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: number;
}

const TodoList = () => {
  const [todoList, setTodoList] = useState<TodoListProps[]>([]);

  useEffect(() => {
    const getTodoList = async () => {
      try {
        const response = await getTodos();

        setTodoList(response?.data);
      } catch (error) {
        console.log("todo list get error : ", error);
      }
    };
    getTodoList();
  }, []);

  return (
    <div>
      {todoList.map((todos, index) => (
        <li key={index}>
          <label>
            <input type='checkbox' />
            <span>{todos.todo}</span>
          </label>
          <button data-testid='modify-button'>수정</button>
          <button data-testid='delete-button'>삭제</button>
        </li>
      ))}
    </div>
  );
};

export default TodoList;
