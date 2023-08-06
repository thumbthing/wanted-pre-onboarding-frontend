import React, { ChangeEvent, useCallback, useState } from "react";
import { createTodo } from "../../api/todo/todo";
import { TodosProps } from "../../pages/Todo";

interface TodoInputProps {
  handleAddTodo: (newTodo: TodosProps) => void;
}

const TodoInput = ({ handleAddTodo }: TodoInputProps) => {
  const [todoInput, setTodoInput] = useState("");

  const handleTodoInput = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const inputText = e.target.value;
    setTodoInput(inputText);
  }, []);

  const handleTodoCreate = useCallback(async () => {
    try {
      const response = await createTodo(todoInput);
      handleAddTodo(response?.data);
    } catch (error) {
      console.log("todo create error: ", error);
    }
  }, [todoInput, handleAddTodo]);

  return (
    <>
      <input data-testid='new-todo-input' onChange={handleTodoInput} />
      <button data-testid='new-todo-add-button' onClick={handleTodoCreate}>
        추가
      </button>
    </>
  );
};

export default TodoInput;
