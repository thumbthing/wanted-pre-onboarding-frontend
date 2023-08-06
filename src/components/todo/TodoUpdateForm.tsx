import React, { ChangeEvent, useCallback, useState } from "react";
import { TodosProps } from "../../pages/Todo";

interface TodoUpdateFormProps {
  todos: TodosProps;
  handleIsEditing: (todoId: number) => void;
}

const TodoUpdateForm = ({ todos, handleIsEditing }: TodoUpdateFormProps) => {
  const [modifyIsCompleted, setModifyIsCompleted] = useState(todos.isCompleted);
  const [modifyTodo, setModifyTodo] = useState(todos.todo);

  const handleModifyTodo = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const editedTodo = e.target.value;
    setModifyTodo(editedTodo);
  }, []);

  const handleModifyIsCompleted = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const editedIsCompleted = e.target.checked;
      setModifyIsCompleted(editedIsCompleted);
    },
    []
  );

  return (
    <>
      <label>
        <input
          type='checkbox'
          checked={modifyIsCompleted}
          onChange={handleModifyIsCompleted}
        />
        <input
          data-testid='modify-input'
          value={modifyTodo}
          onChange={handleModifyTodo}
        />
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
