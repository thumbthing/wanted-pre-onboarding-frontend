import React from "react";
import { TodosProps } from "../../pages/Todo";

interface TodoUpdateFormProps {
  todos: TodosProps;
  handleIsEditing: (todoId: number) => void;
}

const TodoUpdateForm = ({ todos, handleIsEditing }: TodoUpdateFormProps) => {
  return (
    <>
      <label>
        <input type='checkbox' checked={todos.isCompleted} />
        <input data-testid='modify-input' value={todos.todo} />
      </label>
      <button data-testid='submit-button'>제출</button>
      <button
        data-testid='cancel-button'
        onClick={() => handleIsEditing(todos.id)}
      >
        취소
      </button>
    </>
  );
};

export default TodoUpdateForm;
