import React from "react";
import { TodoListProps } from "./TodoList";

interface TodoProps {
  todos: TodoListProps;
  handleIsComplete: (todo: TodoListProps) => void;
}

const Todo = ({ todos, handleIsComplete }: TodoProps) => {
  return (
    <>
      <label>
        <input
          type='checkbox'
          onChange={() => handleIsComplete(todos)}
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
