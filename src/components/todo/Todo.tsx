import React from "react";
import { TodosProps } from "../../pages/Todo";

interface TodoProps {
  todos: TodosProps;
  handleIsComplete: (todo: TodosProps) => void;
  handleIsEditing: (todoId: number) => void;
  handleDeleteTodo: (todoId: number) => void;
}

const Todo = ({
  todos,
  handleIsComplete,
  handleIsEditing,
  handleDeleteTodo,
}: TodoProps) => {
  return (
    <>
      <div>
        <input
          type='checkbox'
          onChange={() => handleIsComplete(todos)}
          checked={todos.isCompleted}
        />
        <span>{todos.todo}</span>
      </div>
      <button
        data-testid='modify-button'
        onClick={() => handleIsEditing(todos.id)}
      >
        수정
      </button>
      <button
        data-testid='delete-button'
        onClick={() => handleDeleteTodo(todos.id)}
      >
        삭제
      </button>
    </>
  );
};

export default Todo;
