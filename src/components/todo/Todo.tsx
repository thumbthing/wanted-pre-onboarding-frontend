import React from "react";
import { TodoListProps } from "./TodoList";

interface TodoProps {
  todos: TodoListProps;
  handleIsComplete: (todo: TodoListProps) => void;
  handleIsEditing: (todoId: number) => void;
}

const Todo = ({ todos, handleIsComplete, handleIsEditing }: TodoProps) => {
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
      <button
        data-testid='modify-button'
        onClick={() => handleIsEditing(todos.id)}
      >
        수정
      </button>
      <button data-testid='delete-button'>삭제</button>
    </>
  );
};

export default Todo;
