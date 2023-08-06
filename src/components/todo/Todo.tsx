import React from "react";
import { TodoListProps } from "./TodoList";

interface TodoProps {
  todos: TodoListProps;
  handleTodoUpdate: (todo: TodoListProps) => void;
}

const Todo = ({ todos, handleTodoUpdate }: TodoProps) => {
  return (
    <>
      <label>
        <input
          type='checkbox'
          onChange={() => handleTodoUpdate(todos)}
          checked={todos.isCompleted}
        />
        <span>{todos.todo}</span>
      </label>
      <button data-testid='modify-button'>수정</button>
      <button data-testid='delete-button'>삭제</button>
    </>
  );
};

export default Todo;
